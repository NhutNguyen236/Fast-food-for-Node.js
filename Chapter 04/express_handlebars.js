const express = require('express')

const expressHandlebars = require('express-handlebars')

const app = express();

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'))
app.route('/about').get((req, res) => {
    res.render('about')
})
app.use((req, res) => {
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500)
    res.render('500')
})

var server = app.listen(8080, () =>{
    console.log("The server is now running at http://localhost:8080");
})