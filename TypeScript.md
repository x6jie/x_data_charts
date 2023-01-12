# ts是什么

> ts是js的超集，js有的ts都有
>
> TypeScript = type + JavaScript
>
> 微软开发，可以在任何运行js的地方运行
>
> TypeScript静态类型的编程语言（编译期做类型检查）
>
>  JavaScript动态类型的编程语言（执行期做类型检查）
>
> 优势： 
>
> - 减少找bug、改bug时间
> - 任何位置都有代码提示
> - 强大的类型系统提升代码可维护性，使得重构代码更加容易
> - 支持最新的ECMAScript语法
> - TS类型推断机制，不需要在代码中每个地方都显示标注类型

```ts
// TypeScript 代码：有明确的类型
let age1 :number = 18
```

 # 运行ts文件

npm i -g tsc

>tsc 文件(.ts)
>
>node 文件(.js)

npm i -g ts-node

>ts-node hello.ts



# Ts常用类型(类型系统)

## 类型注解



```ts
let age: number = 18
```

## 基础类型

1. JS已有类型
   - 原始类型：number/string/boolean/null/undefined/symbol
   - 对象类型: object(数组、对象、函数)
2. TS新增类型
   - 联合类型、自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any等



## 原始类型



```ts
let age: number = 18
let myName: string = '我'
let isLoading: boolean = false
let a: null = null
let b: undefined = undefined
let s: symbol = Symbol()
```



## 数组类型



```ts
let number: number[] = [1,3,5] //推荐
let strings: Array<string> = ['a','b','c']
// 联合类型
let arr:(number | string)[] = [1,'a',2,'b',3]
let arr2: Array<(string | number)> = ['a','b',3]
```



## 类型别名(自定义类型)

>为任意类型取别名
>
>当同一类型(复杂)被多次使用时，可以通过类型别名，简化该类型的使用

```ts
type C ustomArray = (number | string)[]
let arr:CustomArray = [1,'a']    
```



## 函数类型



```ts
function add(num: number,num2: number): number {
    return num + num2
}
const add = (num: number, num2: number): number => {
    return num + num2
}
const add: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2
}
const fn = (arr: string[]): void => {
    console.log(arr);
}
const fn = (arr: Array<string>): void => {
    console.log(arr);
}
// 没有返回值
const fn = (name: string): void => {
}

// 可选参数(可选参数后不能出现必选参数)
const fn2 = (num1?: Array<number>,str? :string): number[] => {
    console.log(num1,str);
    const arr = num1 || [2,2,2]
    return arr  
}
console.log(fn2());

```



## 对象类型



```ts
// 写法1
let person: {name: string; age: number; sayHi(name:string): void} = {
    name:'jack',
    age:19,
    sayHi(name) {}
}
// 写法2
let person: {
    name: string
    age: number
    sayHi:(name:string) => void
} = {
    name:'jack',
    age:19,
    sayHi(name) {}
}
// 可选属性
function myAxios(config:{url: string,method?: string}):void {
    
}

```

### 接口（interface） 复用

> 与类型别名的区别 
>
> - 都可以给对象指定类型
> - 接口只能为对象指定类型
> - 类型别名任意都可以指定别名

```ts
interface IPerson {
    name:string,
    age:number,
    sayHi(name:string):void
}
let person:IPerson ={
    name:"jack",
    age:18,
    sayHi:(name) => {
        console.log(name);
        
    }

}
person.sayHi('aaa')
```

### 接口继承

>如果两个接口有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用

```ts
interface IPerson {
    name:string,
    age:number,
    sayHi(name:string):void
}
interface IPerson2 extends IPerson {
   height:number
}
let person:IPerson2 ={
    name:"jack",
    age:18,
    sayHi:(name) => {
        console.log(name);
        
    },
    height:180

}
console.log(person);
```

## 元组(Tuple)

> 另一种类型的数组，它确切的知道包含多少个元素，以及特定索引对应的类型。

```ts
let position: [number, number] = [1,2]
```



## 类型推论

> ts的类型推论机制可以帮助提供类型推论，省略不写
>
> - 声明变量初始化时
> - 决定函数返回值时

## 类型断言

> 指定更具体的类型
>
> console.dir($0) 属性列表最后可看到类型

```ts
const aLink: HTMLAnchorElement
const aLink = document.getElementById("Link") as HTMLAnchorElement // 推荐
const aLink = <HTMLAnchorElement>document.getElementById("Link")
```



## 字面量类型



> 字面量类型配合联合类型一起使用
>
> 表示一组明确的可选值列表
>
> 更加精确、严谨

```ts
// 类型为 string 
let str1 = 'Hello TS'
// 类型为 Hello TS
const str2 = 'Hello TS'
// 参数direction只能是up/down/left/right
function changeDirection(direction: 'up' | 'down' |'left' |'right' ) {
    console.log(direction)
}
```



## 枚举类型

> 类似于字面量类型 + 联合类型组合，表示一组明确的可选值
>
> 枚举： 定义一组命名常量。
>
> 字符串枚举每一项必须要有初始值 
>
> 会自动编译成js代码
>
> 推荐  字面量类型 + 联合类型



```ts
// enum关键字定义
enum Direction {Up, Down, Left, Right}
function changeDirection(direction: Direction) {
    console.log(direction)
}
changeDirection(Direction.Down) // 1
```





## any 类型



> 不推荐使用 会让TypeScript 变为 AnyScript
>
> 当值为any时，可以对该值进行任意操作，并且不会有代码提示
>
> 适用于临时使用any比年很长很复杂的类型
>
> 隐式any类型
>
> - 声明变量不提供类型和默认值
> - 函数参数没有类型

```ts
// 都不会有任何类型错误提示 
let obj: any = {x: 0}
obj.bar = 100
obj()
const n: number = obj
```



## typeof

>ts 也提供了typeof操作符：可以在类型上下文中引用变量或属性的类型(类型查询)
>
>根据已有变量的值

```ts
console.log(typeof '111') // string
// 类型上下文
function formatPont(point: typeof p) {
    
}

let p = { x: 1, y: 2 }
const fn = (point: typeof p) => {
    console.log(point);
}
console.log(fn({ x:5, y:6}));

```



# 高级类型



## class类

> 不仅提供class的语法功能，也作为一种类型的存在



```ts
// 实例属性
class Person {
    age:number,
    gender="男"
    // 方法
    scale(n: number): void {
        this.x *=n
        this.y *=n
    }
    // 构造函数
     constructor(age: number, gender: string) {
        this.age = age
        this.gender = gender
    }
   
}
const p = new Person(18,'男')
p.age
```



### 继承

> 继承
>
> - extends 继承父类 
> - implements 实现接口（ts提供）



```ts
// extends
class Animal {
    move() {
        console.log("moving")
    }
}
class Dog extends Animal {
    
}
d.move()

// implements 
// Person类中必须提供Singable接口中指定的所有方法和属性
interface Singable {
    sing(): void
}
class Person implements Singable {
    sing() {
		console.log("唱歌")
    }
}
```



### 类成员可见性

> 控制class的方法或属性对于class外的代码是否可见
>
> - public公有的
> - protected受保护的(当前类和子类中可见，实例对象无法访问)
> - private私有的(只有在当前类中可见)

```ts
class Animal {
    // 共有 默认 可省略
    public move() {
		console.log('move')
    }
    // 受保护的 当前和子类中可见 实例对象无法访问
    protected move() {
		console.log('move')
    }
    // 只有在当前类中可见
    private __run__() {
		console.log('内部')
    }
    // protected private
    run() {
		this.move()
        this.__run__()
    }
}
class Dog extends Animal {
	brak() {
        // protected
        this.move()
    }
}
```



### 只读

> readonly 只读，用来防止在构造函数之外对属性进行赋值
>
> 只能修饰属性不能修饰方法
>
> 接口和对象类型也能用readonly

```ts
class Animal {
    age: number = 18
     constructor(age: number {
        // 可以
        this.age = age
    }
    setAge() {
        // 不可以
		this.age = 20	
    }
}
```



## 类型兼容性

> ​    ts : Structural Type System(结构化类型系统)
>
> ​    Nominal Type System(标明类型系统)
>
> 也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为他们属于同一种类型
>
> 成员多的可以赋值给少的
>
> - 接口兼容性
> - 函数兼容性
> - - 参数个数  参数少的可以复制给多的
>   - 参数类型
>   - 返回值类型

```ts
// 类接口
interface Singable {
    sing():void 
}
class Person implements Singable {
    name:'aaa'
    sing(): void {
        console.log('aaa');
        
    }
}
class Person2 implements Singable {
    name:'aaa'
    sing(): void {
        console.log('aaa');
        
    }
}

const p:Person = new Person2()


// 函数兼容性  参数个数 参数类型 返回值类型

```







## 交叉类型

>&：类似于接口继承（extends) 用于组合多个类型为一个类型（常用于对象类型）、
>
>和接口继承的区别，同名属性 extends报错 & 可以理解成 |

```ts
interface Person {
    name: string
}
interface Contact {
    phone: string
}
type PersonDetail = Person & Content
let obj: PersonDetail = {
    name:'123',
    phhone:'132'
}
// 重 载
let c:C
c.fn(1)
c.fn('a')
```



## 泛型和keyof

> 保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用



```ts
// 函数
function id<Type>(value: Type): Type {return value}
const num = id<number>(10)
const str = id<string>('a')
// 省略
let num = id(10)

```

 

### 泛型约束

> 添加约束收缩泛型
>
> 满足约束extends
>
> keyof 关键字接受一个对象类型，生成其键名称(可能是字符串或数字)的联合类型

```ts
function id<Type>(value: Type[]): Type[] {
    console.log(value.length)
    return value
}
// 省略
let num = id(10)

// extends
interface ILength { length: number }
function id<Type extends ILength>(value: Type): Type {
    value.length
     return value 
}
// 变量之间还可以约束
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
getProp({ name: 'jack', age: 18 }, 'age')

// 泛型接口
interface IdFunc<Type> {
    id:(value:Type)=>Type
    ids:()=>Type[]
}
let obj:IdFunc<number> = {
    id:(value) {
    	return value
	}
}
    ids:() {return [1,2,3]}
}


// 泛型类
class GenericNumber<NumType> {
    defaultValie: NumType
    add:(x: NumType, y: NumType) => NumType
}
const myNum = new GenericNumber<number>()
myNum.defaultValie = 10
```

### 泛型工具类型

> Partial<Type> 结构和Props相同，但所有属性变成可选的
>
> Readonly<Type> 所有属性设置为readonly, 不能修改
>
> Pick<Type, Keys> 从Type中选择一组属性来构造新类型
>
> Record<Keys, Type> 构造一个对象类型

```ts
interface Props {
	id: string
    children: number[]
}
// Partial 
type PartialProps = Partial<Props>
// Readonly
type ReadonlyProps = Readonly<Props>
// Pick
type PickProps = Pick<Props，'id' | 'title'>
// Record
type RecordObj = Record<'a','b','c', string[]>
// => 
type RecordObj = {
    a:string[]
    b:string[]
    c:string[]
}
let obj: RecordObj = {
    a:['a'],
    b:['b'],
    c:['c']
}
                          
```





## 索引签名类型和索引查询类型

> 当无法确定对象中有哪些属性时

```ts
// 索引签名类型
interface AnyObject {
    [key: string]: number
}
let obj: AnyObject = {
    a: 1,
    b: 2
}

// 索引查询类型
type Props = {
    a: bumber
    b: string
    c: boolean
}
type TypeA = Props['a']
type TypeB = Props['a'  | 'b']
type TypeC = Props[keyof Props]
```











## 映射类型

> 基于旧类型创建新类型(对象类型)、减少重复、提升开发效率

```ts
type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number; y: number; z: number }
// =>
type PropKeys = 'x' | 'y' | 'z'
type Type2 = {[Key in PropKeys]: number }


// obj
type Props = {
    a: bumber
    b: number
    c: boolean
}
type Props = {
    [key in keyof Props]: number
}
```





# 类型声明文件



>ts文件 （代码实现文件）implementation
>
>- 既包含类型又可执行代码
>- 可被编译为js文件，然后执行
>- 编写代码的地方
>
>d.ts文件（类型声明文件）declaration
>
>- 只包含类型信息的类型声明文件
>- 不会生成js文件，仅用于提供类型信息
>- 为js提供类型信息



## 使用说明

##
