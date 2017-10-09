// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();

var feedbackData = require('../data/feedback.json');

router.get('/api', function(req, res){
  res.json(feedbackData);
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
