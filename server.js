var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;
var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' +
   mongoHost + ':' + mongoPort + '/' + mongoDBName;
var mongoDB = null;

var twitData = require('./twitData');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

//add other routes and middleware
app.get('/', function (req, res, next) {
   res.status(200).render('(something here)');
});



app.use('*', function (req, res, next) {
   res.status(404).render('404');
});

MongoClient.connect(mongoURL, function (err, client) {
   if (err) {
      throw err;
   }
   db = mongoDB = client.db(mongoDBName);
   app.listen(port, function () {
      console.log("== Server listening on port", port);
   });
});
