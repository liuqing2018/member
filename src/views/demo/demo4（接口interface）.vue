<template>
  <h3>4.Interface 接口</h3>
  <p>type和interface的区别</p>
  <ul>
    <li>type和interface都可以定义对象和函数,type还可以定义字符串、数字、元组tuple和联合类型，interface不行</li>
    <li>扩展方式不一样，type通过&来实现，interface通过extends来实现</li>
    <li>interface可以多次定义，并且会进行合并，但是type不行</li>
    <li>使用type描述object 使用interface描述class</li>
  </ul>
</template>

<script setup lang="ts">
// interface user {
//   name: string;
//   age: number;
//   [propname: string]: any,
// }
//
// interface child extends user {
//   gender: string,
// }
// let stu: child = {
//   name: 'link',
//   age: 20,
//   gender: '男',
//   weixin: 'link10234',
//   qq: 1502323
// }
//
// console.log(stu);


</script>

<style scoped>

</style>
