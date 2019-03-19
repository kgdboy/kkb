/* 
     原生ajax 请求及跨域
*/

const http = require('http');
     /* 
          定义一个可访问的网址 JSON

     */

     let allowUrl = 
     {
          "http://www.baidu.com":true,
          "http://localhost" :true,
          "http://aaa.com":true
     }
http.createServer((req,res)=>{
     
     let  {origin} = req.headers;
     
     if(allowUrl[origin]){
          res.setHeader("access-control-allow-origin","*");
          console.log("跨域请求被接收，是信任的源");
     }else{
          console.log("跨或请求被拦截，不是信任的源");
     }
     res.write('{"a":12,"b":5,"c":8}');
     res.end();
}).listen(8080);