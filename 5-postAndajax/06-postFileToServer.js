/* 
    post 传输文件到服务器
*/
const http = require('http');

http.createServer((req,res)=>{
    console.log(req.headers); //打印请求头信息,可以得到分隔符
    let arr = [];
    req.on('data',(buff)=>{
        arr.push(buff);
    })
    req.on('end',()=>{
        let buffer =Buffer.concat(arr);
        console.log(buffer.toString());

    })
}).listen(8080);


/* 
------WebKitFormBoundaryFKAnB3SwOpC74Y5b
Content-Disposition: form-data; name="name"

kgdboy
------WebKitFormBoundaryFKAnB3SwOpC74Y5b
Content-Disposition: form-data; name="password"

123qwe
------WebKitFormBoundaryFKAnB3SwOpC74Y5b
Content-Disposition: form-data; name="file"; filename="1.txt"
Content-Type: text/plain

我爱你中国
我爱你母亲
------WebKitFormBoundaryFKAnB3SwOpC74Y5b--


上面信息有哪些特征，如何进行拆分
1. 我们把这个当作分隔符： ------WebKitFormBoundaryFKAnB3SwOpC74Y5b ，换行当作 /r/n ,拆解成如下格式：
  <分隔符>\r\n字段信息\r\n\r\n内容\r\n<分隔符>\r\n字段信息\r\n\r\n内容\r\n<分隔符>\r\n字段信息\r\n\r\n内容\r\n<分隔符>--
2. 再进行细切分，用<分隔符>切分,格式如下：
    [
        null,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n\r\n内容\r\n,
        --
    ]
3. 掐头去尾，掐null 去 --
    [
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n\r\n内容\r\n,
        \r\n字段信息\r\n\r\n内容\r\n,
    ]
4. 再进行掐头 \r\n 去尾 \r\n
    [
        字段信息\r\n\r\n内容,
        字段信息\r\n\r\n内容,
        字段信息\r\n\r\n内容,
    ]
5. 再按\r\n 切分：
    [
        "字段信息","内容",
        "字段信息","内容",
        "字段信息","内容"
    ]  

    以上所有的操作都是要操作buffer，但是buffer是一个二进制文件。如果操作这个二进制文件呢？因为过程太过复杂，不记录了。直接用框架来实现。
    

*/
