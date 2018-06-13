var express = require('express');
var exphbs = require('express-handlebars');
var allData=require('./allData');
var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(express.static('public'));


app.get('/404',function(req,res,next){
res.status(200).render('404');
});


app.get('/index',function(req,res,next){
res.status(200).render('home',{game_element:allData});
});


app.listen(port, function () {
  console.log("== Server listening on port", port);
})
