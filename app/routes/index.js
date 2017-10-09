// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();

// route for home ('/')
// instead of using app.get(), we need to use router.get()
// add reload script at the end of each page
router.get('/', function(req, res){

  // get the data from data model
  var data = req.app.get('appData');
  var pagePhotos = [];

  data.speakers.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  // render the index view
  // this is where the express app connects/finds views and send back to browser the html template
  // pass data to view page
  res.render('index', {
    "pageTitle": 'Home',
    "artwork": pagePhotos,
    "pageID": 'home'
  });
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
