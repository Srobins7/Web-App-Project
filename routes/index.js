var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NBA Visualizer' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET visualizer page. */
router.get('/visualizer', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  //var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  //var message = "Hello, " + name
  var message = "Win Ratio Heatmap"
  res.render('visualizer', { message: message });
});




module.exports = router;

//branch test