/*------------------------- handle HTTP request with Express -------------------------*/

var express = require('express');
var app = express();

// get the data file content which is an object
var dataFile = require('./data/data.json');

// get the port number automatically
app.set('port', process.env.PORT || 3002);

// routes

app.get('/', function(req, res){

  // create html string based on the data file content
  var info = '';
  dataFile.speakers.forEach(function(item){
    // use ES6 back-ticks, so the variable can span multiple lines
    info += `
    <li>
      <h2>${ item.name }</h2>
      <p>${ item.summary }</p>
    </li>
    `;
  });

  // send response back to the client(browser)
  // no need to worry about mime type here, because express already handle that for us
  res.send(`
    <h1>This is Server built by Express</h1>
    <ol>${ info }</ol>
    `);
});

// listen to port
var server = app.listen(app.get('port'), function(){
  console.log("Listening on port " + app.get('port'));
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
