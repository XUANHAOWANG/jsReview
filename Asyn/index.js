const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 2000);
};console.log('Hello World');
networkRequest();
console.log('The End');
//最先执行 ‘Hello world’
//其次 call networkRequest Function
//执行到setTimeout 执行里面的callback 函数
//callback 函数被推迟2秒 
//执行console.log（‘The end’）
//最后执行 console。log（‘Asyn’）

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise resolved');
}).then(res => console.log(res)).catch(err => console.log(err));
    console.log('Script End');

