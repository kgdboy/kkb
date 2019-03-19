/* 
       处理接收get请求方法1，05get.js是方法2，url模块更方便

*/
const http = require('http');
const url = require('url'); //引入此包为了更方便的解决GET传值的格式转换问题。
let server  = http.createServer((req,res)=>{
    /* 
       
       console.log(url.parse(req.url));
       返回query是个字符串：
       Url {
              protocol: null,
              slashes: null,
              auth: null,
              host: null,
              port: null,
              hostname: null,
              hash: null,
              search: '?username=wg&pass=111222',
              query: 'username=wg&pass=111222',
              pathname: '/aaa',
              path: '/aaa?username=wg&pass=111222',
              href: '/aaa?username=wg&pass=111222' 
       }
         
       url.parse(req.url,true) 加了第2个参数true,
       返回query是个封装好对象：
       Url {
              protocol: null,
              slashes: null,
              auth: null,
              host: null,
              port: null,
              hostname: null,
              hash: null,
              search: '?username=wg&pass=111222',
              query: [Object: null prototype] { username: 'wg',pass: '111222' },
              pathname: '/aaa',
              path: '/aaa?username=wg&pass=111222',
              href: '/aaa?username=wg&pass=111222' 
       }
    */
   console.log(url.parse(req.url,true));
       // 用{} 还是用[] 取决于url.parse的返回类型
    let {pathname,query} = url.parse(req.url,true); 
    console.log(pathname);//  /aaa
    console.log(query);// { username: 'wg', pass: '111222' }
});
server.listen(8080);
