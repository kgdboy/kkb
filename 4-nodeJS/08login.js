/* 
       制作一个登录，注册功能
       要求：  1. 注册时用户名不能重复。 2. 登录时用户名和密码必须全对
*/

const http = require('http');  //新建服务器
const url = require('url');//处理get请求
const fs = require('fs');//处理文件请求
const querystring  = require('querystring'); //处理post请求的字符串 &
let users={}; //初始化一个对象，用于存放登录信息  {"blue":"123qwe"}

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
              // console.log(path,get,post);  //显示这些值
              /* 
                     访问？reg是注册，访问login是登录，都不是是文件
              */
              if(path=='/reg'){
              //在数据中取出用户名和密码
                     let {username,password} = get;
                     if(users[username]){
                            res.write(JSON.stringify({error:1,msg:"用户已被注册"}));
                            res.end();
                     }else{
                            users[username]=password;  //{ wg: '123' }
                            res.write(JSON.stringify({error:0,msg:""}));
                            res.end();
                     }
              }else if(path=='/login'){
                     let {username,password} = get;
                     //判断用户名是否存在，密码是否正确
                     if(!users[username]){
                            res.write(JSON.stringify({error:1,msg:"没有这个用户"}));
                            res.end(); 
                     }else if(users[username]!=password){
                            res.write(JSON.stringify({error:1,msg:"密码错误"}));
                            res.end(); 
                     }else{
                            res.write(JSON.stringify({error:0,msg:"登录成功!"}));
                            res.end(); 
                     }
              }else{
                     fs.readFile(`www${path}`,(err,buffer)=>{  //如果请求接口不是reg也不是login
                            if(err){  //如果这个页面不存在
                                   res.writeHeader(404);
                                   res.write('not found');
                                   res.end();
                            }else{
                                   res.write(buffer) ; //如果存在直接输出buffer，浏览器自动解析buffer,页面跳到 www/aaa.html
                                   res.end();
                            }
                     })
              }
       }
}).listen(8080);