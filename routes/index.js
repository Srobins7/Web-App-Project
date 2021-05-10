var fetch = require('node-fetch');
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


/* GET visualizer page. 
router.get('/visualizer', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  //var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  //var message = "Hello, " + name
  var message = "Win Ratio Heatmap"
  res.render('visualizer', { message: message });
});
*/

// GET visualizer page.
router.get('/visualizer', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  //var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  //var message = "Hello, " + name
  
    var requestUrl1 =  "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=200" 
    var message = "Win Ratio Heatmap"
    console.log("REQUEST URL", requestUrl1)

    fetch(requestUrl1)
      .then(function(response) {
          return response.json()
      })
      .then(function(data){
          console.log("STATS DATA SUCCESS", Object.keys(data))
          res.render('visualizer', {message: message, data: JSON.stringify(data)});
        })
        
      .catch(function(err){
        console.log("Stat data error:", err)
        req.flash("danger", "Sorry, dataviz not working at this time")
      })
    
});







module.exports = router;

