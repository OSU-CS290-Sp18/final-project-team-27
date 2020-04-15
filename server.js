
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


var allData=require('./allData');
var fpsData=require('./fpsData');
var mobData=require('./mobData');
var racingData=require('./racingData');
var sportsData=require('./sportsData');
var app = express();
var port = process.env.PORT || 3339;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));





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
var commentCollection = mongoDB.collection('commentsDB');
commentCollection.find({commentId: gameNum}).toArray(function (err, commentDocs){
  //console.log("commendDocs: ", commentDocs[0]['comments']);
  if (err) {
      res.status(500).send("Error fetching person from DB.");
    } else if (commentDocs.length > 0) {
      res.status(200).render('onegame',{game:allData[gameNum], comments:commentDocs[0]['comments'] });
    } else {
      next();
    }
  });
});

//======MONGO DB========

app.post('/all/:n/addComment', function (req, res, next){
  //console.log("===reached POST");
   var n = req.params.n;
   //console.log("req.body--", req.body);

   if (req.body && req.body.user && req.body.comment) {
     //console.log("this ran 1");
      var comment = {
         user: req.body.user,
         comment: req.body.comment
      };
      var commentCollection = mongoDB.collection('commentsDB');
      commentCollection.updateOne(
         { commentId: n },
         { $push: { comments: comment } },
         function (err, result) {
            if (err) {
               res.status(500).send("Error inserting comment into DB.");
               console.log("error adding to DB");
            } else {
               res.status(200).send("Successfully inserted comment.");
               console.log("==Successfuly added comment to DB");
            }
         }
      );
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

mongoDB = client.db(mongoDBName);

  app.listen(port, function () {
      console.log("== Server listening on port", port);
   });
});
