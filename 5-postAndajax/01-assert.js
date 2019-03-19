/* 
    断言:如果符合要求就通过，如果不符合报错。
*/
const assert = require('assert');
assert(5<3,'aaa');
/* 
    断言失败，消息是aaa
    AssertionError [ERR_ASSERTION]: aaa
    at Object.<anonymous> (E:\wamp\www\kkb\5-postAndajax\01-assert.js:2:1)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
*/

 
    //deepEqual 深度比较  相等于 ==
    assert.deepEqual(变量，预期值，msg)
    
    // 更为深度的比较，相当于 === ，比较成员和类型
    assert.deepStrictEqual (变量，预期值，msg)
    
