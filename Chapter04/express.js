/* This is actually from Chapter 02 :) 
*/
var express = require('express');

var app = express();

app.set('view engine', 'jade')
app.get('/', (req, res) => {
    res.render('index', {title:'Jade view engine', message:'Welcome to Jade', n1: 1, n2: 2})
});

app.route('/sum/:a/:b').get((req, res) => {
    var a = req.params.a;
    var b = req.params.b;
    var sum = parseInt(a) + parseInt(b);

    res.render('sum', {a: a, b:b, c: sum})
})

var server = app.listen(8080, () =>{
    console.log("The server is now running at http://localhost:8080");
})
