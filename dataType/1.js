//基本分类
// string:任意字符
// Number：数字
// bookean:true/false
// undefind:undefined
// null:null

// 对象
// Object：任意对象
// Function：可以执行的对象 函数
// Array：数组

// 判断
// typeof
//typeof 不能判断 null和object object和array
// ===
// instanceof  实例
var a;
console.log(a,typeof a==="undefined" ,a===undefined )//undefined true true

//凡是带括号的 左边为函数 右边为对象 例如 console.log()
var a1={
  a2: ["a",13,console.log]
}
a1.a2[2]('wahaha')//结果等于 console.log('wahaha')
console.log(a1.a2 instanceof Array)//true
console.log(typeof a1.a2)//object

//构造函数
function Person(name,age){
    this.name =name
    this.age=age
}
var a=new Person('niba',15)//a 为实例
console.log(a)
//undefined 指定义未赋值
//null 需要赋值为null
//回收   给变量赋值null 回收
var b=null
console.log(typeof b)