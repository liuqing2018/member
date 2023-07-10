<template>
  <h3>2.Class</h3>
  <pre>
    class Info {
  static name: string = 'LinQ'; // 静态属性
  public name2: string;
  private _name3: string;
  #name4: string; // 私有字段 使用了#就能用其他修饰符
  public readonly name5: string = 'I"m link 5';


  // 构造方法
  constructor(public name2: string) {}

  // 等价于
  // public name3: string;
  // constructor(name: string) {
  //   this.name3 = name;
  // }

  // 静态方法
  static getName = (): string => {
    return this.name;
  }

  // 成员方法
  getName2(): string {
    return this.name2;
  }

  // get方法
  get name3(): string {
    return this._name3;
  }

  // set方法
  set name3(value) {
    this._name3 = value;
  }

  get name4() {
    return this.#name4;
  }

  set name4(value) {
    this.#name4 = value;
  }

  getName5(name: string) {
    this.name5 = name; // error
  }
}
//
let info = new Info('Link 3');
let name = Info.name;
// let getName = Info.getName();
//
// console.log('name: ', name);
// console.log('getName:', getName);
// console.log('set info: name3', info.name3 = 'abc' )
// console.log('info: name3', info.name3)
// console.log('info.getName2: ', info.getName2())
// console.log('info. _name3: ', info._name3); // error/

// 属性访问修饰符
// 1.public： 类中、子类的任何地方都可以调用，外部可以调用
// 2.protected: 类中、子类的地方都可以调用，外部不能调用
// 3.private: 类中可以调用，子类、外部不可以调用(#号是Ecma定义的私有属性，一样生效)


// 私有属性
// console.log(info.#name4); // error
// console.log('name4: ', info.name4 = '我是link 4');
// console.log('name4: ', info.name4); // 我是link 4


// extends 继承
// 1.子类可以继承父类的非私有属性和方法
// 2.通过super方法调用父类的属性和方法？

class Person {
  public name: string;
  public readonly ID: string;
  protected age: number;
  private qq: string;

  constructor(name: string, age: number, qq: string, ID: string) {
    this.name = name;
    this.ID = ID;
    this.age = age;
    this.qq = qq;
  }
}

class Children extends Person {
  constructor(name: string, age: number, qq: string, ID: string) {
    super(name, age, qq, ID);
  }

  getName() {
    console.log('我的名字叫：', this.name);
    console.log('我今年：', this.age);
    console.log('我的QQ号码是：', this.qq);
    // this.ID = 100; // error
  }
}


const child = new Children('Link', 18, '523adf', 'abc');
// console.log('child.name: ', child.name);
// console.log('child.age: ', child.age); // error
// console.log('child.qq: ', child.qq); // error
// child.getName();
// console.log(child.ID = 100) // error

// abstract：使用abstract声明的类叫做抽象类，声明的方法叫做抽象方法
// 1.抽象类：不能被实例化，因为它里面保护1个或者多个抽象方法
// 2.抽象方法：不包含具体实现的方法
//

// 抽象类可以定位为所有需要获取数据的页面，让各自页面去实现自己的逻辑？
abstract class Person2 {
  constructor(public name: string){}

  // 抽象方法
  abstract setAge(age: number): void
}

class Children2 extends Person2 {
  constructor(name: string) {
    super(name);
  }

  setAge(age: number): void {
    console.log('我的年龄是： ', age);
  }
}

const child2 = new Children2('link2');
// console.log(child2.setAge(20));

// 重写和重载
// 重写：子类重写继承自父类的方法
// 重载：指同一个函数提供多个类型定义，多态

class Person3 {
  setName(name: string): string {
    return '我叫：' + name;
  }
}

class Children3 extends Person3 {
  setName(name: string): string {
    return '它的名字叫： ' + name;
  }
}

const youname = new Children3();
// console.log(youname.setName('Tim'));


class Person4 {
  setNameAndAge(name: string): void;
  setNameAndAge(name: number): void;
  setNameAndAge(name: string | number) {
    if (typeof name === 'string') {
      console.log('我的名字叫:', name);
    } else {
      console.log('我的年龄是：', name);
    }
  }
}

const child4 = new Person4();
// child4.setNameAndAge('小明');
// child4.setNameAndAge(10);


class Person5 {
  private _name: string;
  private _age: number;

  constructor(public gender: string) {}

  get name(){
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

class Children5 extends Person5 {
  constructor(public gender: string) {
    super(gender);
  }
}

const child5 = new Children5('男');

child5.age = 10
console.log(child5.age);

// 抽象类 只能被实现，不能实例化
abstract class Person6 {
  public name: string;
  public age: number;
  abstract setInfo(name: string): void;
}

class Children6 extends Person6 {
  setInfo(name: string): void {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

// const person = new Person6(); // error
const child6 = new Children6();
child6.setInfo('abc');
console.log(child6.getName());
  </pre>
</template>

<script setup lang="ts">
class Info {
  static name: string = 'LinQ'; // 静态属性
  public name2: string;
  private _name3: string;
  #name4: string; // 私有字段 使用了#就能用其他修饰符
  public readonly name5: string = 'I"m link 5';


  // 构造方法
  constructor(public name2: string) {}

  // 等价于
  // public name3: string;
  // constructor(name: string) {
  //   this.name3 = name;
  // }

  // 静态方法
  static getName = (): string => {
    return this.name;
  }

  // 成员方法
  getName2(): string {
    return this.name2;
  }

  // get方法
  get name3(): string {
    return this._name3;
  }

  // set方法
  set name3(value) {
    this._name3 = value;
  }

  get name4() {
    return this.#name4;
  }

  set name4(value) {
    this.#name4 = value;
  }

  getName5(name: string) {
    this.name5 = name; // error
  }
}
//
let info = new Info('Link 3');
let name = Info.name;
// let getName = Info.getName();
//
// console.log('name: ', name);
// console.log('getName:', getName);
// console.log('set info: name3', info.name3 = 'abc' )
// console.log('info: name3', info.name3)
// console.log('info.getName2: ', info.getName2())
// console.log('info. _name3: ', info._name3); // error/

// 属性访问修饰符
// 1.public： 类中、子类的任何地方都可以调用，外部可以调用
// 2.protected: 类中、子类的地方都可以调用，外部不能调用
// 3.private: 类中可以调用，子类、外部不可以调用(#号是Ecma定义的私有属性，一样生效)


// 私有属性
// console.log(info.#name4); // error
// console.log('name4: ', info.name4 = '我是link 4');
// console.log('name4: ', info.name4); // 我是link 4


// extends 继承
// 1.子类可以继承父类的非私有属性和方法
// 2.通过super方法调用父类的属性和方法？

class Person {
  public name: string;
  public readonly ID: string;
  protected age: number;
  private qq: string;

  constructor(name: string, age: number, qq: string, ID: string) {
    this.name = name;
    this.ID = ID;
    this.age = age;
    this.qq = qq;
  }
}

class Children extends Person {
  constructor(name: string, age: number, qq: string, ID: string) {
    super(name, age, qq, ID);
  }

  getName() {
    console.log('我的名字叫：', this.name);
    console.log('我今年：', this.age);
    console.log('我的QQ号码是：', this.qq);
    // this.ID = 100; // error
  }
}


const child = new Children('Link', 18, '523adf', 'abc');
// console.log('child.name: ', child.name);
// console.log('child.age: ', child.age); // error
// console.log('child.qq: ', child.qq); // error
// child.getName();
// console.log(child.ID = 100) // error

// abstract：使用abstract声明的类叫做抽象类，声明的方法叫做抽象方法
// 1.抽象类：不能被实例化，因为它里面保护1个或者多个抽象方法
// 2.抽象方法：不包含具体实现的方法
//

// 抽象类可以定位为所有需要获取数据的页面，让各自页面去实现自己的逻辑？
abstract class Person2 {
  constructor(public name: string){}

  // 抽象方法
  abstract setAge(age: number): void
}

class Children2 extends Person2 {
  constructor(name: string) {
    super(name);
  }

  setAge(age: number): void {
    console.log('我的年龄是： ', age);
  }
}

const child2 = new Children2('link2');
// console.log(child2.setAge(20));

// 重写和重载
// 重写：子类重写继承自父类的方法
// 重载：指同一个函数提供多个类型定义，多态

class Person3 {
  setName(name: string): string {
    return '我叫：' + name;
  }
}

class Children3 extends Person3 {
  setName(name: string): string {
    return '它的名字叫： ' + name;
  }
}

const youname = new Children3();
// console.log(youname.setName('Tim'));


class Person4 {
  setNameAndAge(name: string): void;
  setNameAndAge(name: number): void;
  setNameAndAge(name: string | number) {
    if (typeof name === 'string') {
      console.log('我的名字叫:', name);
    } else {
      console.log('我的年龄是：', name);
    }
  }
}

const child4 = new Person4();
// child4.setNameAndAge('小明');
// child4.setNameAndAge(10);


class Person5 {
  private _name: string;
  private _age: number;

  constructor(public gender: string) {}

  get name(){
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

class Children5 extends Person5 {
  constructor(public gender: string) {
    super(gender);
  }
}

const child5 = new Children5('男');

child5.age = 10
console.log(child5.age);

// 抽象类 只能被实现，不能实例化
abstract class Person6 {
  public name: string;
  public age: number;
  abstract setInfo(name: string): void;
}

class Children6 extends Person6 {
  setInfo(name: string): void {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

// const person = new Person6(); // error
const child6 = new Children6();
child6.setInfo('abc');
console.log(child6.getName());

</script>

<style scoped>

</style>
