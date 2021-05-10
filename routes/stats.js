// this is the "routes/stocks.ejs" file...

var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

//const API_KEY = process.env.ALPHAVANTAGE_API_KEY || "abc123" // obtain your own api key and set via environment variable

router.get('/form', function(req, res, next) {
  console.log("FORM DATA", req.body)
  res.render("stats_form");
  // var requestUrl = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${team}`
  // var team = req.body.team || "OOPS"
  // console.log("TEAM ID", team)
  // var requestUrl = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${team}` 
  // console.log("REQUEST URL", requestUrl)

  // fetch(requestUrl)
  //   .then(function(response) {
  //       return response.json()
  //   })
  //   .then(function(data){
  //       console.log("STATS DATA SUCCESS", Object.keys(data))
  //       var team_name = Object.values(data["team"]["slug"]).join(" ")
  //       var record = Object.values(data["team"]["record"]["items"][0]["summary"]).join("")
  //       team_name = team_name.replace("-"," ").toUpperCase();
  //       console.log(team_name)
  //       console.log(record)
  //       req.flash("success", "Stats are ready")
  //       res.render("stats_dashboard", {team_name: team_name, data: JSON.stringify(data), record: record});
  //     })
  //   .catch(function(err){
  //     console.log("Stat data error:", err)
  //     req.flash("danger", "OOPS, Please check your inputs and try again.")
  //     res.redirect("/stats/form")
  //   })
  // res.render("stats_form");
});

router.post('/dashboard', function(req, res, next) {
  console.log("FORM DATA", req.body)
  var team = req.body.Team || "OOPS"
  console.log("TEAM ID", team)
  var requestUrl = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${team}` 
  console.log("REQUEST URL", requestUrl)

  fetch(requestUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log("STATS DATA SUCCESS", Object.keys(data))
        var team_name = Object.values(data["team"]["slug"]).join(" ")
        var record = Object.values(data["team"]["record"]["items"][0]["summary"]).join("")
        team_name = team_name.replace("-"," ").toUpperCase();
        console.log(team_name)
        console.log(record)
        req.flash("success", "Stats are ready")
        res.render("stats_dashboard", {team_name: team_name, data: JSON.stringify(data), record: record});
      })
    .catch(function(err){
      console.log("Stat data error:", err)
      req.flash("danger", "OOPS, Please check your inputs and try again.")
      res.redirect("/stats/form")
    })
});

module.exports = router;