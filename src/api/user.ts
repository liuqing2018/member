import request from '@/utils/request';

interface User {
  telephone: string,
  phoneCode?: string,
  picList?: [
    'http://www/baod.com',
    'http://www/baod.com',
    'http://www/baod.com',
  ]
}

const userLogin = (data: User): Promise<any> => {
  return request.post('/api/login/logi2n', data, {
    isPostForm: true,
    abc: 'L：Q',
  });
}

const userList = (data: User): Promise<any> => {
  return request.post('/api//user/list', data, {
    // isAutoToast: false
    isAutoCatch: true,
  });
}

export {
  userLogin,
  userList,
}
