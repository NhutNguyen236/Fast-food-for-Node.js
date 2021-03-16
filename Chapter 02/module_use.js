var myModule = require('./my_module.js');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.get('/',(req,res) =>{
    res.write("The current date and time are:" + myModule.myDateTime());
    res.write("\nArea and Perimeter of a square with width 4 are:" + myModule.squarePlay[{4},{4}]);
    res.end();
});

var server = app.listen(8080, () =>{
    console.log("The server is now running at http://localhost:8080");
})