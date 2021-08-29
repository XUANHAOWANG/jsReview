//建立一个函数  使年龄小于18使 显示未成年 以此内推
//函数体现封装特点
function showInfor(age){
if(age < 18){
    console.log("child")
}else if(age > 18&age <60){
    console.log("just")
}else if(isNaN(age)){
    console.log("entry an age")
}
else{
    console.log("too old")
}
}

showInfor(213)