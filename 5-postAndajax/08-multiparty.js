/* 
    先安装 multiparty , cnpm i multiparty g
*/
const http = require('http');
const multiparty = require('multiparty');
http.createServer((req,res)=>{
    //创建一个ofrm对象，来自于multiparty的Form对象
    let form = new multiparty.Form({
        uploadDir:'./upload'
    });
    //把req请求给parse方法，就是在解析地址
    form.parse(req);
    /* 
        files :接收表单的普通字段，也就是非上传文件，像name,age
        name 是表单中的name， value 是它的值
    */
    form.on('filed',(name,value)=>{
        console.log('字段',name,value);
    })
    /* 
        file:接收表单的文件数据，也就是上传的文件.
        name 是表单中的name， value 是它的值
    */
    form.on('file',(name,file)=>{
        console.log('文件:',name,file);
    })
    /* 
        所有文件都上传之后执行close
    */
    form.on('close',()=>{
        console.log("表单解析完成");
    })

    

}).listen(8080);


/* 
输出结果：

文件: { fieldName: 'file',
  originalFilename: 'NAS用户密码表.txt',  //原文件名
  path: 'upload\\-NMuSGf3YCp0Eb3NvTd3DxNF.txt', //上传后路径
  headers: //头信息
   { 'content-disposition': 'form-data; name="file"; filename="NAS用户密码表.txt"',
     'content-type': 'text/plain' },
  size: 1959 } //文件大小

*/