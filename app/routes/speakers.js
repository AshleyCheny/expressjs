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
      "pageID": 'speakerList',
      "speakers": pageSpeakers
    });
});

// route for /speakers/:speakerid
router.get('/speakers/:speakerid', function(req, res){

    // get the data from data model
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = [];

    data.speakers.forEach(function(item){
      if (item.shortname == req.params.speakerid) {
        pageSpeakers.push(item);
        pagePhotos = pagePhotos.concat(item.artwork);
      }
    });

    // render the index view
    // this is where the express app connects/finds views and send back to browser the html template
    // pass data to view page
    res.render('speakers', {
      "pageTitle": 'Speaker Info',
      "artwork": pagePhotos,
      "pageID": 'speakerDetails',
      "speakers": pageSpeakers
    });
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
