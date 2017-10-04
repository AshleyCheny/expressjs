/*------------------------- handle HTTP request with Express -------------------------*/

var express = require('express');
var app = express();

// routes

app.get('/', function(req, res){
  // no need to worry about mime type here, because express already handle that for us
  res.send('<h1>This Server with Express</h1>');
});


// listen to port
var server = app.listen(3002, function(){
  console.log("Go to http://localhost:3002 on your browser");
});
/*------------------------- handle HTTP request with Node.js -------------------------*/

// // http is a module which contains functions
// // create a variable(object) called http to store the http module(library)
// var http = require('http');
//
// // createServer with a anonymous call back function
// var myServer = http.createServer(function(request, response){
//
//   // set the head with 200 status code and the content type
//   response.writeHead(200, {"content-Type": "text/html"});
//
//   response.write("<h1>Hey, this is NodeJS/Express Server!!</h1>");
//   response.end();
// });
//
// // listen to a specific port
// myServer.listen(3002);
//
// console.log('Go to http://localhost:3002 on your browser');
