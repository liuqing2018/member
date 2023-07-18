<template>
  <h1>VITE_USER_NODE_ENV: {{envStr.VITE_USER_NODE_ENV}}</h1>
  <h1>MODE: {{envStr.MODE}}</h1>
  <h5>theme colorPrimary: {{token.colorPrimary}}</h5>
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
</template>

<script setup lang="ts">
import {
  theme,
  Input as AInput,
} from 'ant-design-vue';
import { global } from '@/store/global';

const { useToken } = theme;
const { token } = useToken();

const store = global();

const envStr = import.meta.env;
console.log('envStr: ', envStr);

const handleChange = (): void => {
  store.setTheme('red');
}

const handleReset = (): void => {
  store.$reset();
}

</script>

<style scoped>

</style>
