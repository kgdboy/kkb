/* 
    输出变量之和

let a = 5;
let b = 12;
console.log(a+b);
*/
/* 
    每秒都输出一次时间戳

setInterval(() => {
    let data = new Date().getTime();
    console.log(data);
}, 1000);
*/
/* 
    匹配数字
*/

let str = "sdf23423rsdfs3dfaadfjh232893uf";
console.log(str.match(/\d+/g));