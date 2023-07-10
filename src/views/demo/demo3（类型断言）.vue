<template>
  <h3>3.类型断言</h3>
</template>

<script setup lang="ts">
// 类型断言： 在特定的环境中，我们比TS更清除具体的类型，不需要TS去判断，即类型断言会告诉编辑器，你不用给我检查了，就是我指定的那个。
// 1.使用尖括号<string>name (在react中会报错，与jsx语法产生冲突)
// 2.使用as（推荐）name as string
let num: any = 'abc';
let result: number = (<string>num).length;
let result2: number = (num as string).length;


// 确定赋值断言: 如果一个变量声明了，但是未被赋值的情况在函数里被使用，编译会报错。如果我们明确这变量会被赋值，那么我们可以使用明确赋值断言
// 即在声明变量的时候，在变量后边加一个！，TS编译的时候就不会再报错:
// let num2: number;
// let num21!: number;
//
// const setNum2 = () => num2 = 7;
// const setNum21 = () => num21 = 7;
//
// setNum2();
// setNum21();
//
// console.log(num2)
// console.log(num21)

let num11: number;
let num1!: number;

const setNumber = () => num11 = 7
const setNumber1 = () => num1 = 7

setNumber()
setNumber1()

console.log(num11) // error 并没有报错
console.log(num1) // ok

// 非空断言: 用！表示，用来断定某变量一定不是null或者undfined
let flag: null | undefined | string;
flag = '10';
flag!.toString(); // ok
flag.toString(); // error


// 双重断言： 断言失效以后，可能会用到
interface Info {
  name: string;
  age: number;
}

const name = 'link' as Info;
const name1 = 'link' as any as Info;

</script>

<style scoped>

</style>
