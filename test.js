/* Setting things up. */
var path = require('path'),
    express = require('express'),
    app = express(),   
    Twit = require('twit'),
    pickrandom = require(__dirname + '/pickrandom.js'),
    SICP = require(__dirname + '/quotes.json'),


/* You can use cron-job.org, uptimerobot.com, or a similar site to hit your /BOT_ENDPOINT to wake up your app and make your Twitter bot tweet. */

dailySICP = pickrandom.random_from_array(SICP.quotes);

console.log(dailySICP);