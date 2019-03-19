/* 
        通过地址栏请求一个文件，把这个文件输出出来
*/
const http = require('http');
const fs = require('fs');
let server  = http.createServer((req,res)=>{
    /* 
        {req.url} 会返回一个地址栏请求的绝对路径,例：  /01.html
    */
    fs.readFile(`www${req.url}`,(err,buff)=>{
        console.log(req.url);
        if (err) {
            res.writeHeader(404);  //发送给机器看的,404 没这个页面
            res.write('not found');  //发送给人看的
        }else{
            res.writeHeader(200);
            res.write(buff);  //直接把缓冲区里的二进制输出到浏览器上
        }
        res.end();
    })
});
server.listen(8080);