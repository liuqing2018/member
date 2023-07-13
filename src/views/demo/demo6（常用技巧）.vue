<template>
  <h3>6.常用技巧: 类型守卫？</h3>
  <ul>
    <li>
      <p>extends</p>
      <pre>
        interface Props {
          length: number;
        }
        const getLength = &lt;T extends Props &gt; (data: T): number => {
          return data.length;
        }

        const result: number = getLength('abc');
        // const result: number = getLength(10); // error
        console.log(result);
      </pre>
    </li>
    <li>typeof</li>
    <li>
      <p>keyof: 可以获取一个对象接口中所有的key值，可以检查对象上的键是否存在</p>
      <pre>
        interface Props {
          name: string;
          age: number;
          gender: string;
        }

        type propsKey = keyof Props; // name age gender

        const result1: propsKey = 'name';
        const result2: propsKey = 'abc'; // error

        // 范型中的应用
        const getInfo = &lt;T, K extends keyof T> (data: T, key: K): T[K] => {
          return data[key];
        }

        const info = {
          name: 'link',
          age: 20,
          gender: '男',
        }

        getInfo(info, 'name');
        getInfo(info, 'abc'); // error

      </pre>
    </li>
    <li>Partial</li>
    <li>Record</li>
    <li>Exclude</li>
    <li>Omit</li>
  </ul>
</template>

<script setup lang="ts">
// infer: 可以使用条件语句声明一个类型变量
// type Info <T> = T extends {
//   a: infer U;
//   b: infer U
// } ? U : never;
//
// type Props = Info<{a: string, b: number}>
// type props1 = Info<number> //

</script>

<style scoped>

</style>
