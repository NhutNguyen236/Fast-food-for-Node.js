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

app.route('/draw/:row_number/:col_number/:symbol').get((req, res) => {
    var s = req.params.symbol;
    var rn = req.params.row_number;
    var cn = req.params.col_number;
    /**
     * empty Array -> store 2 for loops
     * we have an array with a picture inside
     * parse array to string -> assign string to another variable
     * assign the new variable ->  #{string}
     */
    var draw_arr = new Array();

    for(var i = 0; i < 10; i ++){
        draw_arr.push('\n');
        for(var j = 0; j < 6; j++){
            draw_arr.push(s);
        }
    }

    var draw_str = draw_arr.toString();
    console.log(draw_str);

    res.render('draw', {row_number: rn, col_number: cn, symbol: s});
})

var server = app.listen(8080, () =>{
    console.log("The server is now running at http://localhost:8080");
})
