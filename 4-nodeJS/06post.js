/* 
       处理接收post请求方法

*/
const http = require('http');
const querystring = require('querystring');
let server  = http.createServer((req,res)=>{
       console.log(req.method);//POST请求
  /* 
       data事件：代表有数据过来了
       end事件： 代表结束了
       buffer 传过来的二进制数据
  */
       let arr =[];//初始化一个数组，用于装每一段buffer数据。因为post发送数据是一段一段发的。
       req.on('data',buffer=>{
              arr.push(buffer); //把每次Post过来的数据都压进数组
       })
       req.on('end',()=>{
              let buffer = Buffer.concat(arr);//将数组每一位连接成一个长的二进制串。
              let buff = buffer.toString();//调用方法，把二进制转成字符串。username=kgdboy&pass=111
              let post = querystring.parse(buff);//调用querystring方法把buff字符串转成对象格式。
              console.log(post);//{ username: 'kgdboy', pass: '111' }
       })
});
server.listen(8080);
