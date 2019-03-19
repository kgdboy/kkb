const http = require('http'); //http模块没有安装就可以使用，是因为他是系统模块，在安装node时就已经装好了。
let server = http.createServer(()=>{ //新建一台服务器，如有人访问就会触发回调函数
    console.log('来了老弟！'); //有人请求时，这个函数就会被回调
});
/* 
    将这个服务器开启，并监听8080端口，此时访问http://localhost:8080/ 则会在cmd中显示”来了老弟“
*/
server.listen(8080); //