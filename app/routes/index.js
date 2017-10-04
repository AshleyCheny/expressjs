// in order to modularize routes, every route file need to have the following two variables
var express = require('express');
var router = express.Router();

// route for home ('/')
// instead of using app.get(), we need to use router.get()
router.get('/', function(req, res){
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Welcome</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px">
    <p>This is homepage!</p>
    `);
});

// in order to modularize routes, at the end of each route file, we have to export the router
module.exports = router;
