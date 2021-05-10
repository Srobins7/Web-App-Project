# Web-App-Project - Design and Implementation Guide

1. App Topic:
   Display NBA stat:  Team schedule and win/loss record by division

2. Page Descriptions

   Home Page: Carousel of open-source NBA/basketball themed pictures and App name

   About:  Brief description of app and our motivation for making it.  Also provides pictures of site creators.

   Dataviz:  Provides different responsive data visualizations of different NBA stat metrics.  This page displays the following charts:

      a. Win Percent Heatmap:  This chart maps teams by division and ranking within using win percent (total wins/total games played).  Lighter colors mean a higher win percent whereas darker colors represent a lower win percent. 

      b. Average Score Dot Plot: This chart displays both average points for and against for each team in the NBA during the recent 2020-2021 season.  Team are listed alphabetically.  Distance between dots represents average score margin for each team.  This type of information would be useful for people who like to place bets on NBA games (particularly spread bets).

      c. Streak Chart:  This chart displays the current streak for each team.  Only teams on a streak are displayed.  Positive numbers represent winning streaks while negative numbers represent lossing streaks.

   Stats Form:  This form allows for the user to select a team based on dynamic radios and drop downs that adjust based on user selection.  For example if the user selects Eastern Conference then the next drop down will only provide division options within the Eastern Conference.  The same is true for division selection.  Ultimately once the user selects their preferred team and clicks submit they are then redirected to the stats dashboard.

   Stats Dashboard:  This page displays the selected teams name, current record, as well as a table of important information about the team including standing, schedule, etc.

3. Comprehensive Setup/Implementation Guide:

   A.  This app is meant to be run server side so will require a local installation of Node.js as well as NPM.  

  
  
4. API

Website: http://www.espn.com/apis/devcenter/docs/
API 1:`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/:team  -- (In place of :team goes corresponding team id number, see list of team ids below as referece.)
API 2:http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=200 

API Description:
