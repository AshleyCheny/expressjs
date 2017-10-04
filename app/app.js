/*------------------------- handle HTTP request with Express -------------------------*/

var express = require('express');
var app = express();

// get the data file content which is an object
var dataFile = require('./data/data.json');

// get the port number automatically
app.set('port', process.env.PORT || 3002);

// routes

// route for home ('/')
app.get('/', function(req, res){
  res.send(`
    <h1>Welcome</h1>
    <p>This is homepage!</p>
    `);
});

// route for /speakers
app.get('/speakers', function(req, res){

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
    <h1>This is speakers' info page.</h1>
    <ol>${ info }</ol>
    `);
});

// route for /speakers/:speakerid
app.get('/speakers/:speakerid', function(req, res){
  // get the speaker object based on the speaker id get from the the request
  var speaker = dataFile.speakers[req.params.speakerid];

  // display js variable data in html using ${ js variable }
  res.send(`
    <h1>${ speaker.title }</h1>
    <h2>with ${ speaker.name }</h2>
    <p>${ speaker.summary }</p>
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
