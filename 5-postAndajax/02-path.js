/* 
    path: 关于路径的一些操作
*/
const path = require('path');
 let pathstr = "./wamp/www/jzgdd/2.txt";
console.log(path.dirname(pathstr)); //提取目录 ./wamp/www/jzgdd
console.log(path.basename(pathstr)); //提取文件名 2.txt 
console.log(path.resolve(__dirname,'build')); //D:\wamp\www\kkb\5-postAndajax\build 