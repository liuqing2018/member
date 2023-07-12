<template>

  <h1>VITE_USER_NODE_ENV: {{envStr.VITE_USER_NODE_ENV}}</h1>
  <h1>MODE: {{envStr.MODE}}</h1>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>

<script setup lang="ts">
let envStr = import.meta.env;
interface UserInfo {
  name: string,
  age: number,
  gender: string,
  hobby: string[],
}

let user: UserInfo = {
  name: 'LinQ',
  age: 20,
  gender: 'male',
  hobby: ['music'],
}

console.log('user: ', user);
// console.log('import.meta: ', import.meta);
// console.log('import.meta.env: ', import.meta.env);
</script>

<style scoped>

</style>
