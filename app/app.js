// http is a module which contains functions
// create a variable(object) called http to store the http module(library)
var http = require('http');

// createServer with a anonymous call back function
var myServer = http.createServer(function(request, response){

  // set the head with 200 status code and the content type
  response.writeHead(200, {"content-Type": "text/html"});

  response.write("<h1>Hey, this is NodeJS/Express Server!!</h1>");
  response.end();
});

// listen to a specific port
myServer.listen(3002);

console.log('Go to http://localhost:3002 on your browser');
