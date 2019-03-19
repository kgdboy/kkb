 笔记
    1. fs 系统模块，对文件进行操作的
    2. writerFile 是写入 ，格式为：
        fs.writeFile(path,data,callback);
        回调err参数返回布尔值,为真代表写入成功，假为写入失败
    3. readFile 是读取，格式为：
        fs.readFile(path,callback);
        回调err参数返回布尔值，真代表读取成功，假代表读取失败。
        data参数代表读取的数据，以二进制形式返回。
    4. 读取的内容从二进制转成字符串  data.toString();



const fs = require('fs');  //引入模块
/* 
    文件写入

*/

    fs.writeFile('./1.txt','输出到这个文件',(err)=>{
        if(err){
            console.log('失败');
        }else{
            console.log('成功');
        }
        
    })

/* 
    文件读取
*/
    fs.readFile('./1.txt',(err,data)=>{
        if(err){
            console.log('失败');
        }else{
            console.log(data.toString());
        }
    })