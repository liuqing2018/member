<template>
  <h3>5.范型</h3>
  <p>为什么要用范型: 无论我们传入的是声明类型，都返回对应的类型，针对这种情况就需要范型了</p>

  <pre>
<!--    const getList = <T>(data: T): T[] => {-->
<!--      let list = [];-->
<!--      for (let i = 3; i < 3; i++) {-->
<!--        list.push(data);-->
<!--      }-->
<!--      return list;-->
<!--    }-->
  </pre>
  <ul>
    <li>泛型函数</li>
    <li>泛型接口</li>
    <li>泛型类</li>
  </ul>

  <p>范型常用字母：</p>
  <ul>
    <li>T: 代表type，定义泛型时通常用作第一个类型变量名称</li>
    <li>K: 代表key，表示对象中键类型</li>
    <li>V: 代表value，表示对象中的值类型</li>
    <li>E: 代表Element，表示元素类型</li>
  </ul>

</template>

<script setup lang="ts">
// const joinList = (data: any): any[] => {
//   let list = [];
//   for (let i = 0; i < 3; i++) {
//     list.push(data);
//   }
//   return list;
// }
// 泛型函数
// const getList = <T>(data: T): T[] => {
//   let list = [];
//   for (let i = 0; i < 3; i++) {
//     list.push(data);
//   }
//   return list;
// }
//
// const result: string[] = getList<string>('abc');
// const result2: number[] = getList<number>(12);
//
// console.log(result);
// console.log(result2);
//
// // 范型接口
// interface User<T, K> {
//   name: T,
//   age: K,
// }
//
// const user: User<string, number> = {
//   name: 'link',
//   age: 123
// }
//
// // 范型类: 可以指定泛型的默认类型，从实际参数中无法推断类型的时候，这个默认值就会起作用
// class Person<T = number> {
//   private arr: T[] = [];
//
//   add(value: T) {
//     this.arr.push(value);
//   }
//
//   getValue(index: number): T {
//     return this.arr[index];
//   }
// }
//
// const p1 = new Person();
// p1.add<number>(11);
// p1.add<number>(22);
//
// const result1 = p1.getValue(0);
// console.log(result1);

</script>

<style scoped>

</style>
