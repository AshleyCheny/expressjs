// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();

// route for /speakers
router.get('/speakers', function(req, res){

    // get the data from data model
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function(item){
      pagePhotos = pagePhotos.concat(item.artwork);
    });

    // render the index view
    // this is where the express app connects/finds views and send back to browser the html template
    // pass data to view page
    res.render('speakers', {
      "pageTitle": 'Speakers',
      "artwork": pagePhotos,
      "pageID": 'speakers',
      "speakers": pageSpeakers
    });
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
