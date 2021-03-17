var mod1 = require('./module1.js');

exports.mod2 = function(){
    console.log("Hello, this is 2nd module") 
    
    new function callMod1(){
        mod1.mod1();
    }
}
