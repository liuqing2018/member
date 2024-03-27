import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Method,
} from 'axios';
import { isEmpty } from '@/utils/index';
import { global } from '@/store/global';
import { message } from 'ant-design-vue';

const store = global();

// 响应结构
/** 失败
 status: "success",
 data : {} || []
 */

/** 失败
  status: "failed",
  data : {
    errno: 40000,
    description: "路由无效"
  }
 */

// 不计入全局loading的接口列表
const withoutLoadingList: string[] = [
  '/abc/xxx',
];

// 可以多次请求的接口列表（默认请求A在没有完成之前，不可以再次发起A请求）
const repeatRequestList: string[] = [
  '/api//user/list'
];

// 取消请求句柄
const abortControllerMap = new Map();

const config: any = {
  timeout: 1000 * 60 * 5, // 5分钟超时

  // 默认提交的数据格式为json，isPostForm设置为true后可以单独传递formdata格式(application/x-www-form-urlencoded)
  isPostForm: false,

  // 是否计入全局 loading 状态
  isLoading: true,

  // 自动提示接口错误信息
  // 默认 true 是通过 antd 的 message 组件展示接口异常时候返回的信息（格式见 【响应结构-失败】）
  // 设置为 false 则不展示
  isAutoToast: true,

  // 自动捕获错误
  // 设置为 false 时，需要自行在页面通过 .catch 进行异常捕获。
  isAutoCatch: true,

  // 默认在拦截器里返回 response.data.data，这样在使用的时候直接就能拿到 data。设置为true以后，从根层级返回 即 response。
  isRawData: false,
}

const instance: AxiosInstance = axios.create(config);

const isIncrement: boolean = false;

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // console.log('config: ', config);

  const {
    isPostForm, // 是否使用 form data 格式提交数据
    isLoading, // 是否计入全局 loading 状态
    url: requestUrl, // 接口路径
  }: {
    isPostForm: boolean,
    isLoading: boolean,
    url: string,
  } = config

  // 终止重复请求
  const abortController = abortControllerMap.get(requestUrl);
  if (!isEmpty(abortController) && !repeatRequestList.includes(requestUrl)) {
    abortController.abort();

    // 清除本次请求接口次数寄存器
    store.setCrossCount(isIncrement);

    // 清除本次请求记录
    abortControllerMap.delete(requestUrl);
  }

  // 本次请求数据的格式
  const currentContentType: string | undefined = config.headers['Content-Type'] as string;

  // 通过 form data 提交表单的格式
  const formContentType: string = 'application/x-www-form-urlencoded';

  if (isPostForm || currentContentType?.includes(formContentType)) {
    config.headers['Content-Type'] = formContentType;
  }

  // 不在非 loading 接口白名单 && 本次不计入loading
  if (!withoutLoadingList.includes(requestUrl) && isLoading) {
    // 如果是重复请求的接口，只增加一次

    if ((repeatRequestList.includes(requestUrl) && isEmpty(abortController)) || !repeatRequestList.includes(requestUrl)) {
      // 将 abortController 的 signal 关联到本次请求，用于后续取消
      // https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController

      const abortController = new AbortController();

      config.signal = abortController.signal;

      abortControllerMap.set(requestUrl, abortController);

      // 累计正在请求中的接口数量
      store.setCrossCount();
    }
  }

  return config;
}, (error: AxiosError) => {
  Promise.reject(error);
})

instance.interceptors.response.use((response: AxiosResponse) => {
  const {
    config,
  }: {
    config: InternalAxiosRequestConfig,
  } = response;

  const {
    url: requestUrl,
    isRawData,
    isAutoToast,
    isAutoCatch,
  }: {
    url: string,
    isRawData: boolean,
    isAutoToast: boolean,
    isAutoCatch: boolean,
  } = config;

  if (!isEmpty(abortControllerMap.get(requestUrl))) {
    // 清除本次请求接口次数寄存器
    store.setCrossCount(isIncrement);

    // 清除本次请求记录
    abortControllerMap.delete(requestUrl);
  }

  if (!isEmpty(response?.data?.data)) {
    // 处理登录状态过期
    const loginExpirationCode: number = 100022;
    const errno: number = response.data.data.errno;
    if (!isEmpty(errno)) {
      if (errno === loginExpirationCode) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return;
      } else {
        const responseError = {
          ...response.data,
          isAutoToast,
          isAutoCatch,
        };

        return Promise.reject(responseError);
      }
    }

    // 返回源数据（非axios原始数据）
    if (isRawData) {
      return response;
    }

    return response.data.data;
  }

  return response;
}, (error: AxiosError) => {
  const { status }: { status: number } = error.response;
  const {
    url: requestUrl,
    isAutoToast,
    isAutoCatch,
  }: {
    url: string,
    isAutoToast: boolean,
    isAutoCatch: boolean,
  } = error.config;

  const httpStatusError = {
    status: 'failed',
    data: {
      description: `响应超时或服务器异常(${status})，请检查网络或联系管理员。`,
    },
    isAutoToast,
    isAutoCatch,
    sourceError: error, // 原始错误
  };

  // 清除本次请求接口次数寄存器
  store.setCrossCount(isIncrement);

  // 清除本次请求记录
  abortControllerMap.delete(requestUrl);

  return Promise.reject(httpStatusError);
})

const iAxios = <T, C>(method: Method, url: string, data?: T, config?: C): Promise<any> => {
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    ...config,
  };

  if (method.toLocaleLowerCase() === 'get') {
    requestConfig.params = data;
  } else {
    requestConfig.data = data;
  }

  return instance.request(requestConfig).catch((error) => {
    const { isAutoToast, isAutoCatch, data } = error;

    if (isAutoToast === true) {
      console.log('isAutoToast : ', data.description);
      message.error(data.description);
    }

    if (isAutoCatch === false) {
      return Promise.reject(error);
    }
  })
}

const request = {
  get<T, C> (url: string, data: T, config?: C) {
    return iAxios('post', url, data, config);
  },
  post<T, C> (url: string, data: T, config?: C) {
    return iAxios('post', url, data, config);
  },
  postForm<T, C> (url: string, data: T, config?: C) {
    return iAxios('post', url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      ...config,
    });
  },
  native<C> (config: C) {
    return instance.request(config);
  },
}

export default request;
