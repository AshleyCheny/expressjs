/*------------------------- handle HTTP request with Express -------------------------*/

var express = require('express');
const ejsLint = require('ejs-lint');

// add the reload module
var reload = require('reload');
var app = express();

// get the data file content which is an object
var dataFile = require('./data/data.json');

// get the port number automatically
app.set('port', process.env.PORT || 3002);
// set certain variables to be available throughout the entire app
app.set('appData', dataFile);
// add the reference for view engine(template)
app.set('view engine', 'ejs');
// app will have access to views folder
app.set('views', 'app/views');

// set global variables to be able to use the data in the view
app.locals.siteTitle = 'Ronux Meetups';
// create local files so that views file can have access to the variables directly
app.locals.allSpeakers = dataFile.speakers;

// method express provides to destinate a specific static data in public folder
app.use(express.static('app/public'));

// routes reference
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

// listen to port
var server = app.listen(app.get('port'), function(){
  console.log("Listening on port " + app.get('port'));
});

// use the method reload() to reload the server and app
reload(server, app);

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
