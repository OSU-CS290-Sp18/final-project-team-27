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


app.get('/404',function(req,res,next){
res.status(404).render('404');
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


app.listen(port, function () {
  console.log("== Server listening on port", port);
})
