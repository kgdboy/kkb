/* 
    url: 对网址进行操作
*/
const url = require('url');
let urlstr =  "http://www.bing.com:8080/a/b/1.html?a=12&b=5&c=3";
let urlstr2 =  "http://www.bing.com:8080/a/b/1.html?a=1&a=2&a=3";

// console.log(url.parse(urlstr));
// console.log(url.parse(urlstr,true)); //可以把query解成对象
console.log(url.parse(urlstr2,true));//  query: [Object: null prototype] { a: [ '1', '2', '3' ] },
/* 
    返回一个对象
Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.bing.com',
    port: '8080',
    hostname: 'www.bing.com',
    hash: null,
    search: '?a=12&b=5',
    query: 'a=12&b=5',
    pathname: '/a/b/1.html',
    path: '/a/b/1.html?a=12&b=5',
    href: 'http://www.bing.com/a/b/1.html?a=12&b=5' 
}
*/