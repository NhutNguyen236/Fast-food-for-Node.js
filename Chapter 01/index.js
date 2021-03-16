// Imagine that this require acts like an import in Python, you have to require the module that you need to use 
var http  = require('http');

// create server 
// This is called arrow function when you replace function(something) with something => 
const server = http.createServer((req, res) => {
    // Sending a header data to client 
    res.writeHead(200, {'Content-Type' : 'text/html'});
    // when the header is sent to client, we ask the function to return a single line 'Hello World' as a HTML format
    res.end('Hello World');
});

/* This is a bit flexible here, .listen function is used to make our server app listen
to a specified port such as 8080 and you can change it to whatever port you want to 
*/
server.listen(8080, () => {
    console.log("The server is now running at http://localhost:8080");
});

// Done, then let open that server at the address above 
// To exit server, use Ctrl + C