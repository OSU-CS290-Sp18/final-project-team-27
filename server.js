var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(express.static('public'));


app.get('/404',function(req,res,next){
res.status(200).render('404');
});

var sportData={game_element: [
      
        {
                "PhotoURL":"https://s.aolcdn.com/hss/storage/midas/3167606ff2b4945981a5b02779bf8853/206196542/DXzJwdsU0AE_2zY.jpg",
                "title":"Mario Tennis",
                "price": "59.88",
                "categories":"sports",
                "description":"Revive old rivalries in full-blown tennis battles with a roster of Mario series favorites using tricked-out shots"
        },
        {
                "PhotoURL":"https://i.ytimg.com/vi/BWR9P0gJGEU/maxresdefault.jpg",
                "title":"NBA2K",
                "price":"19.99",
                "categories":"sport",
                "description":"The?NBA 2K?series is a series of?basketball?simulation video games?developed and released annually since 1999. The premise of each game in the series is to emulate the sport of basketball."
        }
]}
app.get('/index',function(req,res,next){
res.status(200).render('home',sportData);
});


app.listen(port, function () {
  console.log("== Server listening on port", port);
})
