var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hello World");
})

server.listen(8080, () => {
    console.log("The server is now running at http://localhost:8080");
});

// Next will be Request handling 

var request = require('request');

request("http://www.google.com", (error, res, body) => {
    console.log(body);
})