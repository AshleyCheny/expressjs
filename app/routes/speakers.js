// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();

// route for /speakers
router.get('/speakers', function(req, res){
  // get the app data
  var dataFile = req.app.get('appData');

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
router.get('/speakers/:speakerid', function(req, res){
  // get the app data
  var dataFile = req.app.get('appData');

  // get the speaker object based on the speaker id get from the the request
  var speaker = dataFile.speakers[req.params.speakerid];

  // display js variable data in html using ${ js variable }
  res.send(`
    <h1>${ speaker.title }</h1>
    <h2>with ${ speaker.name }</h2>
    <p>${ speaker.summary }</p>
    `);
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
