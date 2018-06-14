
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


var allData=require('./allData');
var fpsData=require('./fpsData');
var mobData=require('./mobData');
var racingData=require('./racingData');
var sportsData=require('./sportsData');
var app = express();
var port = process.env.PORT || 3339;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');
app.use(express.static('public'));


app.use(bodyParser.json());


app.get('/',function(req,res,next){
res.status(200).render('home',{game_element:allData});
});

app.get('/sports',function(req,res,next){
res.status(200).render('home',{game_element:sportsData});
});

app.get('/racing',function(req,res,next){
res.status(200).render('home',{game_element:racingData});
});

app.get('/moba',function(req,res,next){
res.status(200).render('home',{game_element:mobData});
});

app.get('/fps',function(req,res,next){
res.status(200).render('home',{game_element:fpsData});
});

app.get('/all',function(req,res,next){
res.status(200).render('home',{game_element:allData});
});

app.get('/all/:num',function(req,res,next){
var gameNum = req.params.num;
if(allData[gameNum])
	res.status(200).render('onegame',{game:allData[gameNum]});
else
	next();
});


//======MONGO DB========

app.post('/all/:n/addComment', function (req, res, next){
   var n = req.params.n;
   console.log("post works");
   if (req.body && req.body.user && req.body.comment) {
      var comment = {
         user: req.body.user,
         comment: req.body.comment
      };
      var commentCollection = mongoDB.collection('comments');
      commentCollection.updateOne(
         { commentId: n },
         { $push: { comments: comment } },
         function (err, result) {
            if (err) {
               res.status(500).send("Error inserting comment into DB.");
            } else {
               res.status(200).send("Successfully inserted comment.");
            }
         }
      )
   }
});

//====================

app.get('*',function(req,res,next){
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
