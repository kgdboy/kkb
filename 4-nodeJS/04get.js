/* 
       处理接收get请求方法1，05get.js是方法2，更方便

*/
const http = require('http');
const querystring = require('querystring'); //引入此包为了更方便的解决GET传值的格式转换问题。
let server  = http.createServer((req,res)=>{
    let strUrl = req.url; ///aaa?username=wg&pass=123qwe
    let [url,query]= strUrl.split("?"); //以问号分隔装入url和query
    console.log(query);
    let get = querystring.parse(query); //利用这个模块可以将username=wg&pass=123qwe转成 { username: 'wg', pass: '123qwe' }
    /* 
        querystring 专门解析这种中间带 & 符的get传值。

    */
    console.log(get); //[Object: null prototype] { username: 'wg', pass: '123qwe' }
    console.log(get.username);//wg
    console.log(get.pass);//123qwe

});
server.listen(8080);
