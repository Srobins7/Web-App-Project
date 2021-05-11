# Web-App-Project - Design and Implementation Guide

1. App Topic:
   Display NBA stats and provide dataviz of those stats.  App is meant to be user friendly and responsive across devices.

2. Page Descriptions

   Home Page: Carousel of open-source NBA/basketball themed pictures and app name

   About:  Brief description of app and our motivation for making it.  Also provides pictures of site creators.

   Dataviz:  Provides different responsive data visualizations of NBA stat metrics.  This page displays the following charts:

      a. Win Percent Heatmap:  This chart maps teams by division and ranking by using win percent (total wins/total games played).  Lighter colors mean a higher win percent whereas darker colors represent a lower win percent. 

      b. Average Score Dot Plot: This chart displays both average points for and against for each team in the NBA during the recent 2020-2021 season.  Team are listed alphabetically.  Distance between dots represents average score margin for each team.  This type of information would be useful for people who like to place bets on NBA games (particularly spread bets).

      c. Streak Chart:  This chart displays the current streak for each team.  Only teams on a streak are displayed.  Positive numbers represent winning streaks while negative numbers represent lossing streaks.

   Stats Form:  This form allows for the user to select a team based on dynamic radios and drop downs that adjust based on user selection.  For example if the user selects Eastern Conference then the next drop down will only provide division options within the Eastern Conference.  The same is true for division selection.  Ultimately once the user selects their preferred team and clicks submit they are then redirected to the stats dashboard.

   Stats Dashboard:  This page displays the selected teams name as well as other important details such as current record and league standing.

3. Comprehensive Setup/Implementation Guide:

   Step 1: This app uses express.js and is meant to be run server side so will require a local installation of Node.js, NPM and git bash along with other functional NPM packages.  Prior to downloading the code from our github site,  it is recommended to first install git CLI if not already installed: https://git-scm.com/downloads  or check to make sure your current version is up to date (git --version).  You should then initialize a project repository in the directory of your choosing (this will be used later to copy our code to your own repository).  That can be done by using the cd command to navigate to the directory in the git bash command prompt (e.g. e.g. cd ~ /Desktop/my-project) and then git init command to intialize. Next make sure you have node js / NPM installed on your computer.  You can download it from this site: https://nodejs.org/en/download/ 
   
   Step 2: Next using git bash command line, you can create a local copy of the code from our public github repository using the git clone command.  In order to do this, first visit to our github repository: https://github.com/Srobins7/Web-App-Project then click on the green code button and copy to your clipboard either the https link or the SSH link (if you have an ssh configured).  Next in your git bash command prompt, navigate to the directory in which you wish to clone our repository using the cd command  (e.g. cd ~ /Desktop).  In this directory then run git clone (repo URL from your clipboard).

   Step 3: Now you should have a local copy of our code stored on your computer.  Next in the local directory where our code is stored make sure you install all of the necessary NPM packages.  You can do this by typing NPM install --save into the git bash command prompt.  Lastly, we suggest opening up the actual code in your preferred text editor using the command code . in the command prompt.  Go to the package.json file and add mon to the end of node in the scripts section.  This will allow you to make changes to the file while the app is running. 

   Step 4: After the packages are installed your ready to run the app locally.  To do this make sure you're still in the same directory where the app files are stored and type set DEBUG=myapp:* & npm start into the git bash command prompt.  This should run the app.  To view the app go to your browser windown and put localhost:3000 into the url.  You should then see a locally running copy of our webapp.  From here you can make changes and then push them to your own github repository.  This can be accomplished by setting the remote url to the https or ssh for your own repo by using the following command git remote set-url origin (your github repo URL).  For more information on this process see:

   https://stackoverflow.com/questions/18200248/cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github

   Step 5:  Whenever you feel satisfied with your own copy of the app you can deploy it to the internet by pushing it to a cloud hosting server.  We prefer to use Heroku as its easy to use, fast, and free.  You'll first need to make a heroku account: https://signup.heroku.com/  and we recommend also downloading the heroku CLI: https://devcenter.heroku.com/articles/heroku-cli#download-and-install .  From here you can create an app on your heroku server.  To do this use the following commands in git bash:

   heroku login (will prompt you to login to your account--only need to do this the first time)
   heroku create (your app name- should be unique)

   As our app doesn't need an api key you won't have to setup any environment variables so next you can push your local code to your heroku app:

   git push heroku main

   Step 5:  Now your app should be hosted on the internet.  Just as an aside if you run into any issues with hosting make sure that there is a Procfile in your repo's version of our code that has web: node ./bin/www
  
  
4. API

   We use the ESPN API.  This API does not require any API keys to access and provides up to date info on NBA teams.  You can find out more at their devcenter website:  http://www.espn.com/apis/devcenter/docs/

   To use this API to collect team data you can either use this URL to see get stats for specific teams:

   API URL 1:`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/:team  -- (In place of :team goes corresponding team id number)

   Or you can use this URL to get more general data across all teams in the league:

   API URL 2:http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=200

   This is a list of the different team ids on the ESPN API for your reference:

   Atlanta Hawks	1
   Boston Celtics	2
   Brooklyn Nets	17
   Charlotte Hornets	30
   Chicago Bulls	4
   Cleveland Cavaliers	5
   Dallas Mavericks	6
   Denver Nuggets	7
   Detroit Pistons	8
   Golden State Warriors	9
   Houston Rockets	10
   Indiana Pacers	11
   Los Angeles Clippers	12
   Los Angeles Lakers	13
   Memphis Grizzlies	29
   Miami Heat	14
   Milwaukee Bucks	15
   Minnesota Timberwolves	16
   New Orleans Pelicans	3
   New York Knicks	18
   Oklahoma City Thunder	25
   Orlando Magic	19
   Philadelphia 76ers	20
   Phoenix Suns	21
   Portland Trail Blazers	22
   Sacramento Kings	23
   San Antonio Spurs	24
   Toronto Raptors	28
   Utah Jazz	26
   Washington Wizards	27





