<script setup lang="ts">
// import demo1 from './components/demo1（数据类型）.vue';
// import demo2 from './components/demo2（类class）.vue';
// import demo3 from './components/demo3（类型断言）.vue';
// import demo4 from './components/demo4（接口interface）.vue';
// import demo5 from './components/demo5（泛型）.vue';
// import demo6 from './components/demo6（常用技巧）.vue';
// let b:number='111' // 新增
</script>

<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
