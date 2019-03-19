let a = 12;
let b = 5;
let c = 99;
export{a,b,c}; //先声明然后一起输出
import xxx from './mod3'; //可以在js文件中，再引入其它js文件。
import {num} from './mod3';
console.log(a+b+c+xxx+num);

export function sum(x,y) {
    return x+y;
}
export class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    show(){
        alert(this.name);
        alert(this.age);
    }
}
export default 'aaa';

