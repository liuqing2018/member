<template>
  <h3>1.TS的基本数据类型</h3>
  <ul>
    <li>基本类型：string number boolean symbol bigint null undefined</li>
    <li>引用类型：array Tuple(元组) object function</li>
    <li>特殊类型：any unknow void nerver Enum</li>
    <li>其他类型：类型推理 字面量类型 交叉类型</li>
  </ul>

  <h5>格式</h5>
  <ul>
    <li>变量：let name: string = value</li>
    <li>枚举：enum status { a = value, b = value}</li>
    <li>交叉类型：type user = { a: value, b: value}</li>
    <li>函数: function getData(name:string, age?:number):void {}</li>
    <li>接口: interface user { name: string, age: number}</li>
    <li>对象：let user = { name: string, age: number}</li>
  </ul>
  <h5>类型推论:</h5>
  <p>在TS中，如果不设置类型，且不进行赋值，将会推论为any类型，如果进行赋值就会默认为类型</p>

  <h5>字面量类型</h5>
  <pre>
    字面量类型: 在TS中，我们可以指定参数的类型是什么，目前支持字符串、数字、boolean三种类型。
    let str100: 'linq';
    // str100 = 'hello'; // str100的值只能是linq

    let num100: 1|2|3|7|10 = 1;
    num100 = 10; // ok
    // num100 = 200; // error

    let flag100: true;
    flag100 = true; // ok
    flag100 = false; // error;
    console.log(flag100);

  </pre>

  <h5>交叉类型</h5>
  <pre>
    // 交叉类型: 讲多个类型合并为一个类型，使用&符号连接
    type user = {
      name: string,
      age: number,
    }

    type qq = {
      qq: string,
    }

    const info: qq & user = {
      name: 'linq',
      age: 10,
      qq: 'abc'
    }
  </pre>
</template>

<script lang="ts" setup>
/*
* 基础数据类型：let name: type = value;
* 1.null和undefined两个类型一旦赋值上，就不能在赋值给其他类型
* 2.symbol是独一无二的，假设再定一个symbol也不想等
* */
// let str: string = 'hello typescript！';
// let age: number = 10;
// let flag: boolean = false;
// let unique: symbol = Symbol();
// let bigInt: bigint = 10n;
// let nullName: null = null;
// let undefinedName: undefined = undefined;
//
// /*
// * 数组：
// * 1. 数据类型+[]， 如string[]
// * 2. Array+<数据类型>，如Array<string>
// * */
// let strArr1: string[] = ['a', 'b', 'c'];
// let strArr2: Array<string> = ['a', 'b', 'c'];
// let numArr1: number[] = [1, 2, 3, 4, 5];
// let numArr2: Array<number> = [1, 2, 3, 4];
// // let unionArr: Array<string> = [1, 2, 3]; // error
//
//
// /*
// * 元组：Tuple
// * 1.数组的一种特殊情况，可以针对数组中的每个元素作出具体限制;
// * 2.Tuple是允许扩增的（允许push）,但是不允许直接通过下标访问
// * */
//
// let tuple1: [string, number] = ['a', 10];
// let tuple2: [string, number] = [];
// tuple1.push('c');
// tuple1.forEach((item) => {
//   tuple2.push(item)
// })
// let t1: string = tuple1[0];
// let t2: number = tuple1[1];
// // let t3: string = tuple1[2]; // error
// // console.log(t1, t2, t3); // a 10 c
// // console.log(tuple2); // ['a', 10, 'c']
//
// // Object
//
// let obj1: object = { a: 1, b: 2}
// obj1.a = 3 // error
//
// // console.log(obj1);
//
// let obj2: {
//   name: string,
//   age: number
// } = {
//   name: 'leo',
//   age: 10,
// }
//
//
// // function
// // 定义函数有两种方式1，function 2,箭头函数
// function sayHello(name:string) : void {
//   console.log('hello: ', name);
// }
//
// // sayHello('LinQ'); // hello: LinQ
//
// const sayHello2 = (name: string): void => {
//   console.log('hello: ', name);
// }
// // sayHello2('Leo'); // hello: leo
//
// // 参数类型
// // 1.可选参数：如果函数要配置可有可无的参数时，可以通过？实现，且可选参数一定要在最后边
// // 2.剩余参数：仍可以使用扩展运算符 ...
// const setUserInfo = (name: string, age: number, qq?:string, wx?: string): void => {
//   console.log(name, age, wx, qq);
// }
//
// // setUserInfo('LinQ', 19, '1602427727');
//
// // 函数重载:是使用相同名称和不同参数数量或类型创建多个方法的一种能力。在 TypeScript 中，表现为给同一个函数提供多个函数类型定义。简单的说：可以在同一个函数下定义多种类型值，总后汇总到一块
//
// let obj: any = {};
// // function setInfo(name: string): void {};
// // function setInfo(name: number): void {};
// // function setInfo(name: boolean): void {};
// // function setInfo(name: symbol): void {};
// function setINfo(name: string | number | boolean): void {};
// // setInfo('leo');
// // setInfo(123);
//
//
// // 特殊类型
// // any：任何类型都可以归于any，any是所有类型的顶级类型。如果不指定变量的类型，则默认为any类型，当然这就丧失了TS的作用
// let an: any; // 等价于 let an;
// an = 10;
// an = [1, 2, 3, 4];
// an = {};
// an = function() {}
//
// // unknow：和any一样可以作为所有类型的顶级类型，但是unknown更加严谨
// // 1.unknow会对值进行检测，而类型any不会做检测操作，也就是说any可以赋值给任何类型，但是unknow只能赋值给unknow和any类型
// // 2.unknow不允许定义对值有任何操作（如方法、new等），但是any可以。
//
// let uk1: unknown;
// let ay1: any;
// uk1 = '1';
// uk1 = false;
// uk1 = [1, 2, 3];
// // ay1 = 10;
// // let someValue: string = uk1; // error
//
// uk1 = ay1;
// ay1 = uk1;
//
// // new uk1();
// // new ay1();
//
// // void 当一个函数，没有返回值，TS会默认他的返回值为void类型
// const foo1 = ():void => {};
// const foo2 = () => {};
// // const foo3 =(): void => 10; // error
// const foo4 = (): void => undefined;
//
// // never：表示一个函数永远不会存在返回值，never应该是void的子集，void的返回值可以是undefined，never不可以
// let error = (): never => {
//   throw new Error('error');
// }
//
// let error2 = (): never => {
//   while(true) {}
// }
//
// // Enum 枚举：可以定义一些待名字的常量，这样可以清晰表达意图
// // 1.枚举的类型只能是string或者number
// // 2.定义的名称不能是关键字
// enum userStatus {
//   normal,
//   error,
// }
//
// let uStatus: userStatus = userStatus.normal;
// // console.log(uStatus); // 0
//
// enum userType {
//   GUEST = '10',
//   VIP = '20',
// }
//
// let uType: userType = userType.GUEST;
// // console.log(uType); // '10'
//
// // 类型推论
// let value = 10;
// value = 20;
// // value = 'nihao'; // error value已经被推论为number类型
// // console.log(value);
//
// // 字面量类型: 在TS中，我们可以指定参数的类型是什么，目前支持字符串、数字、boolean三种类型。
// let str100: 'linq';
// // str100 = 'hello'; // str100的值只能是linq
//
// let num100: 1|2|3|7|10 = 1;
// num100 = 10; // ok
// num100 = 200; // error
//
// let flag100: true;
// flag100 = true; // ok
// flag100 = false; // error;
// console.log(flag100);
//
//
// // 交叉类型: 讲多个类型合并为一个类型，使用&符号连接
// type user = {
//   name: string,
//   age: number,
// }
// type qq = {
//   qq: string,
// }
//
// const info: qq & user = {
//   name: 'linq',
//   age: 10,
//   qq: 'abc'
// }

</script>

<style scoped>

</style>
