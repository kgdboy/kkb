/* 
    stringquery: 对get参数操作的方法
*/
const querystring = require('querystring');
let urlstr =  "a=12&b=5&c=3";  //上下两种格式互转
let urlstr2= {"a":1,"b":2};

console.log(querystring.parse(urlstr)); //将字符串拼成一个对象{ a: '12', b: '5', c: '3' }
console.log(querystring.stringify(urlstr2));//将对象拼成一个get传值的字符串 a=1&b=2
