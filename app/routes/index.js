// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();

// route for home ('/')
// instead of using app.get(), we need to use router.get()
// add reload script at the end of each page
router.get('/', function(req, res){
  // render the index view
  res.render('index');
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
