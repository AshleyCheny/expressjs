// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');

var feedbackData = require('../data/feedback.json');

// handle the get request from client/browser
router.get('/api', function(req, res){
  res.json(feedbackData);
});

// handle the post request from client/browser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res){
  feedbackData.unshift(req.body);
  // use Node.js file system to save the data into the file
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8',
  function(err){
    if (err) {
      console.log(err);
    }
  });
  // send the data back to the client/browser
  res.json(feedbackData);
});

// handle the delete request from client/browser
router.delete('/api/:id', function(req, res){
  // delete the data based on the parameter id
  feedbackData.splice(req.params.id, 1);
  // use Node.js file system to save the data into the file
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8',
  function(err){
    if (err) {
      console.log(err);
    }
  });

  // send the data back to the client/browser
  res.json(feedbackData);
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
