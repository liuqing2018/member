<template>
  <h1>VITE_USER_NODE_ENV: {{envStr.VITE_USER_NODE_ENV}}</h1>
  <h1>MODE: {{envStr.MODE}}</h1>
<!--  <h5>theme colorPrimary: {{token.colorPrimary}}</h5>-->
  <a-button type="primary" @click="handleToUserList">User List</a-button>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
  <a-input></a-input>
  <a-config-provider
    :theme="{
        token: {
          colorPrimary: '#00b96b',
          borderRadius: '20px',
        },
      }"
  >
    <a-button type="primary" @click="handleChange">change to red</a-button>
  </a-config-provider>
  <a-button @click="handleReset">Reset theme</a-button>
  <div class="box">
    <a-button @click="handleLogin">Login</a-button>
    <a-button @click="handleList">List</a-button>
  </div>

  <a-alert message="showIcon = false" type="success">
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Success Tips" type="success" show-icon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Informational Notes" type="info" show-icon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Warning" type="warning" show-icon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Error" type="error" show-icon>
    <template #icon><smile-outlined /></template>
  </a-alert>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { SmileOutlined } from '@ant-design/icons-vue';

import { global } from '@/store/global';
import { userLogin, userList } from '@/api/user';

// const { useToken } = theme;
// const { token } = useToken();

const router = useRouter();
const store = global();

const envStr = import.meta.env;
console.log('envStr: ', envStr);

const handleChange = (): void => {
  store.setTheme('red');
}

const handleReset = (): void => {
  store.$reset();
}

const handleToUserList = (): void => {
  router.push('/user/list');
}

const handleLogin = (): void => {
  userLogin({
    telephone: '123',
    phoneCode: '123',
    picList: [
      'http://www/baod.com',
      'http://www/baod.com',
      'http://www/baod.com',
    ]
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
}

const handleList = (): void => {
  userList({
    telephone: '123',
    phoneCode: '123',
    picList: [
      'http://www/baod.com',
      'http://www/baod.com',
      'http://www/baod.com',
    ]
  }).then((data) => {
    console.log('handleList data:', data);
  }).catch((error) => {
    console.log('index catch: ', error);
    alert(error.status)
  })
}
</script>

<style lang="less" scoped>
.box {
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border: 1px solid red;
}
</style>
