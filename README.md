# testwithpromise

Test

Success:
run mongo save
OK! - resolve
kafka run after reject
Success END with:  200
=============
UnSuccess:
run mongo save
reject
Error - reject
=============
UnSuccess:
run mongo save
Error - throw
Promise { <pending> }
Error: Error - throw
    at Promise (/home/donamo/testwithpromise/test.js:18:13)
    at tryCallTwo (/home/donamo/testwithpromise/node_modules/promise/lib/core.js:45:5)
    at doResolve (/home/donamo/testwithpromise/node_modules/promise/lib/core.js:200:13)
    at new Promise (/home/donamo/testwithpromise/node_modules/promise/lib/core.js:66:3)
    at testAsync (/home/donamo/testwithpromise/test.js:5:10)
    at main (/home/donamo/testwithpromise/test.js:24:9)
    at main.catch (/home/donamo/testwithpromise/test.js:40:7)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:834:11)
    at startup (internal/bootstrap/node.js:283:19)