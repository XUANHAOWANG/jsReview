//对象为了给多个变量赋值

var o={
    name: "tom",
    age:12,
    setName: function(name){
        this.name=name
    }, 
    setAge:function(age){
        this.age=age
    }
}
//两种调用方式
o.setName('wang')
o['setAge'](26)//这一方法在任何情况下都能使用   变量['属性名'](参数)
console.log(o.name,o['age']);

//属性名包含特殊字符时 只能使用   变量['属性名']=参数
o['content-type']='text/jason'
console.log(o['content-type'])

var propName="123"
var value=18
o[propName]=value
console.log(o[propName])
console.log(o)