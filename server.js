var express = require('express');
var exphbs = require('express-handlebars');
var allData=require('./allData');
var fpsData=require('./fpsData');
var mobData=require('./mobData');
var racingData=require('./racingData');
var sportsData=require('./sportsData');
var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

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
if(allData[gameNum])
	res.status(200).render('onegame',{game:allData[gameNum]});
else
	next();
});

//app.get('/FPS/:gameID',function(req,res,next){
//var gameNum = req.params.gameID;
//if(fpsData[gameNum])
//	res.status(200).render('onegame',{game:fpsData[gameNum]});
//else
//	next();
//});
//
//app.get('/sports/:gameID',function(req,res,next){
//var gameNum = req.params.gameID;
//if(sportsData[gameNum])
//	res.status(200).render('onegame',{game:sportsData[gameNum]});
//else
//	next();
//});
//
//app.get('/MOB/:gameID',function(req,res,next){
//var gameNum = req.params.gameID;
//if(mobData[gameNum])
//	res.status(200).render('onegame',{game:mobData[gameNum]});
//else
//	next();
//});
//
//app.get('/racing/:gameID',function(req,res,next){
//var gameNum = req.params.gameID;
//if(racingData[gameNum])
//	res.status(200).render('onegame',{game:racingData[gameNum]});
//else
//	next();
//});





app.get('*',function(req,res,next){
res.status(404).render('404');
});


app.listen(port, function () {
  console.log("== Server listening on port", port);
})
