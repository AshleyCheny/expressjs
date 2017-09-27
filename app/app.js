// http is a module which contains functions
// create a variable(object) called http to store the http module(library)
var http = require('http');

// create
var myServer = http.createServer(function(request, response){
  response.writeHead(200, {"content-Type": "text/plain"});

  response.write();
});
