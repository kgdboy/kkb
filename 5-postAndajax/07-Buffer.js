let buffer = new Buffer("abc\r\nDDASSDKDFJSDdsfd\r\nadsfsdf");

// console.log(buffer.indexOf('\r\n')); //返回3，会有警告 

console.log(buffer.slice(0,3).toString()); //abc