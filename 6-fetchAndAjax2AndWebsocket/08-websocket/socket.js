/* 
    安装socket.io包 ：cnpm i socket.io -D
*/
const http = require('http');
const io = require('socket.io');
/* 
    1. 建立 http
    2. 建立 ws 
*/

let server = http.createServer((req,res)=>{

}).listen(8080);

//建立ws,它可以监听server，一但发现与ws通信的，它就会抢过来。

let wsServer = io.listen(server);
wsServer.on('connection',sock=>{
    /* 
    sock 是建立连接后生成的，它有两种用途：
        1. sock.emit('name',数据) 服务器主动发信息
        2. sock.on('name',function(数据){}) 用来接数据
        

    */
    sock.on('aaa',function (a,b) {
        console.log(a,b,a+b);
    })
    let i=0;
    setInterval(()=>{
        sock.emit('bbb',`我是服务器主动发送的数据${i++}`);
    },1000)
    
})