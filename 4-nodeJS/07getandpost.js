/* 
       整合get与post的用法
*/

const http = require('http');  //新建服务器
const url = require('url');//处理get请求
const querystring  = require('querystring'); //处理post请求的字符串 &
// 建立一个服务器
let server = http.createServer((req,res)=>{//使用这个模块新建一个服务器并监听8080端口
       let path='',get={},post={};//初始化
       if (req.method=='GET') { //如果请求是GET
              let {pathname,query} = url.parse(req.url,true); //true可以返回加工好的对象格式
              path = pathname;//得到请求地址
              get = query; //拿到GET传值的数据，是一个对象
              show(); //调用方法显示
       }else if(req.method=='POST'){ //如果是POST请求
              let arr = []; //新建一个空数组，POST会多次进行数据传输。
              path = req.url; //POST请求的地址就是当前请求地址，没变化。不是地址栏传值
              req.on('data',buffer=>{  //post的on监听data，data有多个，buff传输过来的二进制
                     arr.push(buffer); //将每次传输过来的二进制压进数组
              });
              req.on('end',()=>{  //当数据全部传输完成后
                   let buffer =  Buffer.concat(arr); //将数组的每一次合并在一起，组成一个整体二进制
                   post = querystring.parse(buffer.toString());//将二进制转换成字符串，调用querystring方法，使它变成一个对象格式。
                   show();//调用方法显示
              });
       }
       function show(){
              console.log(path,get,post);  //显示这些值
       }
}).listen(8080);