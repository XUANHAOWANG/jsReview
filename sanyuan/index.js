//语法结构
// 条件表达？表达式1：表达式2
var a=10

a==10?console.log("yes"):console.log("no")

//补0练习 如果大于10不需要补0 不是则在前面加上一个0 例如 03

function zero(number) {
result=number>=10?console.log(number):console.log(( "0"+number))
}
zero(10)
zero(2)