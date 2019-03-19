const path = require('path');
// console.log(__dirname); //输出当前文件所在目录E:\wamp\www\kkb\2-object\moudule
module.exports={
    mode:'production', //编译模式分生产模式和开发模式  （production、development）
    entry:'./index.js', //声明哪个是入口文件,注意一定要有./跟着
    output:{
        path:path.resolve(__dirname,'./build'), //此路径必须是绝对路径
        filename:'build.js' //输出编译后js文件名
    } 
}