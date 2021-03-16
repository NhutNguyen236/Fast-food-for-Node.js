/* In Chapter 1, we require http to create server and so on 
But now, we have just installed express module so yeah! require it to use it
*/
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.get('/',(req,res) =>{
    res.send('Hello World')
});

var server = app.listen(8080, () =>{
    console.log("The server is now running at http://localhost:8080");
})