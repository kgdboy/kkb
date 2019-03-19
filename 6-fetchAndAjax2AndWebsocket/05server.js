const http = require('http');
const multiparty = require('multiparty');
http.createServer((req,res)=>{
    let form = new multiparty.Form({
        uploadDir:'./upload/'
    });
    form.parse(req);
    form.on('field',(name,value)=>{
        console.log(name);
        console.log(value);
    });
    form.on('file',(name,file)=>{
        console.log(name,file);
    });
    form.on('close',()=>{
        console.log('结束了');
    });

}).listen(8080);