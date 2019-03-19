/* 
    http模块 ，是处理用户请求与响应的系统模块，不用下载可直接引入

*/
const http = require('http');
let server  = http.createServer((req,res)=>{
    console.log('来了老弟');
    res.write('abc'); //输出到客户端浏览器
    res.end(); // 告诉客户端结束了
});
server.listen(8080);