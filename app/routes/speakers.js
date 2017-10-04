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
      <img src="/images/speakers/${ item.shortname }_tn.jpg" alt="speaker">
      <p>${ item.summary }</p>
    </li>
    `;
  });

  // send response back to the client(browser)
  // no need to worry about mime type here, because express already handle that for us
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Speakers</h1>
    <ul>${ info }</ul>
    <script src="/reload/reload.js"></script>
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
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>${ speaker.title }</h1>
    <h2>with ${ speaker.name }</h2>
    <img src="/images/speakers/${ speaker.shortname }_tn.jpg" alt="speaker">
    <p>${ speaker.summary }</p>
    <script src="/reload/reload.js"></script>
    `);
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
