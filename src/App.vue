<script setup lang="ts">
import { global } from '@/store/global';

const store = global();

</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: store.getTheme,
        // colorPrimary: theme.darkAlgorithm,
        // colorPrimary: theme.compactAlgorithm,
        // colorPrimary: theme.defaultConfig,
        // colorPrimary: theme.useToken,
        // colorPrimary: theme.defaultAlgorithm,
      },
    }"
    component-size="middle"
    :input="{
        allowClear: true,
      }"
  >
    <div id="app">
      <h1>Hello App!</h1>
      <p>
        <router-link to="/">Go to Home</router-link>
      </p>

      <p>请求中的接口数量: {{store.crossCount}}</p>
      <p>isLoading: {{store.loading}}</p>

      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>
