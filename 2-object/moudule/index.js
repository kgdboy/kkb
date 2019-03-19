 import * as mod1 from './mod1.js'
// ./mod1.js 一定要有./
/*console.log(mod1); //把所有引入进来的都打印出来
alert(mod1.sum(mod1.a,mod1.b));  //调用方法

let p  = new mod1.Person('吴戈',35);  //实例化一个Person类
p.show(); //调用实例p的show方法*/

/* import {a,b,c} from './mod1'; //不全引入，挑着引入
console.log(a,b,c); */

import s from './mod1'; //引一个不存在的变量，就相当于引入的是默认的 default， s的名随便起
console.log(s);
alert(mod1.sum(mod1.a,mod1.b));  //调用方法
/* 
只引入模块代码，不引入内部成员，一般用于引入图片或css文件时使用
import "./1.jpg";
import "./1.css";
 */
/* 异步加载  此处路径有问题
import('./bild/mod2').then(mod2=>{
    alert('引入成功');
    alert(mod2.wg);
},err=>{
    alert('引入出错');
})*/