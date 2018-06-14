var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

// var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoURL = "mongodb://localhost:27017/test";

var mongoDB = null;

var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/404',function(req,res,next){
res.status(404).render('404');
});

app.get('/sports',function(req,res,next){
var gameCollection = mongoDB.collection('sports');
gameCollection.find().toArray(function(err, sports){
	if(err){
	res.status(500).send("Error fetching people from DB.");
	}else{
	res.status(200).render('sports',{
		sports: sports
		});
	}
	});
});
app.get('/racing',function(req,res,next){
var gameCollection = mongoDB.collection('racing');
gameCollection.find().toArray(function(err, racing){
        if(err){
        res.status(500).send("Error fetching people from DB.");
        }else{
        res.status(200).render('racing',{
                racing:racing
                });
        }
        });
});
app.get('/moba',function(req,res,next){
var gameCollection = mongoDB.collection('moba');
gameCollection.find().toArray(function(err, moba){
        if(err){
        res.status(500).send("Error fetching people from DB.");
        }else{
        res.status(200).render('moba',{
                moba:moba
                });
        }
        });
});
app.get('/fps',function(req,res,next){
var gameCollection = mongoDB.collection('fps');
gameCollection.find().toArray(function(err, fps){
        if(err){
        res.status(500).send("Error fetching people from DB.");
        }else{
        res.status(200).render('fps',{
                fps:fps
                });
        }
        });
});
app.get('/all',function(req,res,next){
var gameCollection = mongoDB.collection('all');
gameCollection.find().toArray(function(err, all){
        if(err){
        res.status(500).send("Error fetching people from DB.");
        }else{
        res.status(200).render('all',{
                all:all
                });
        }
        });
});

app.use('*', function (req, res, next) {
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
})

