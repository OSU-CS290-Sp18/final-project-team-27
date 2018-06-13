var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

//var peopleData = require('./peopleData');

var app = express();
var port = process.env.PORT || 3396;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

gameTest={
  photoURL: "https://steamcdn-a.akamaihd.net/steam/apps/508440/header.jpg?t=1522157705",
  title: "Totally Accurate Battlegrounds",
  price: "5.99",
  catagories: "First Person Shooter",
  description: "A great Game."
}

app.get('/', function (req, res, next) {
  //home page with all games.
  res.status(200).render('home', {game_element: gameTest});
});

// app.get('/fps', function (req, res, next) {
//   //page for all FPS games
//             });
// });
// app.get('/moba', function (req, res, next) {
//   //page for all MOBA games
//             });
// });
// app.get('/sports', function (req, res, next) {
//   //page for all SPORTS games
//             });
// });
// app.get('/racing', function (req, res, next) {
//   //page for all RACING games
//
//
//             });
// });
// app.get('/game/:game', function (req, res, next) {
//   var game = req.params.games.toLowercase();
//
//   //generate page for that game with game_element and
//   //comments section for that game.
//
//             });
// });
app.use('*', function (req, res, next) {
  res.status(404).render('404');
  //display 404 page.
});

// FPS
// MOBA
// SPORTS
// RACING

// app.get('/test', function (req, res, next) {
//   res.render('photoPage', {
//     name: "Kitty",
//     showDiv: false,
//     photos: [
//       {
//         photoURL: "http://placekitten.com/320/320?image=6",
//         caption: "A kitty"
//       },
//       {
//         photoURL: "http://placekitten.com/320/320?image=4",
//         caption: "A kitty"
//       },
//       {
//         photoURL: "http://placekitten.com/320/320?image=2",
//         caption: "A kitty"
//       },
//       {
//         photoURL: "http://placekitten.com/320/320?image=3",
//         caption: "A kitty"
//       }
//     ]
//   });
// });
//
// app.get('/people', function (req, res, next) {
//   res.status(200).render('peoplePage', {
//     people: peopleData
//   });
// });
//
// // var availablePeople = [
// //   'beyonce',
// //   'einstein',
// //   'luke',
// //   'marie',
// //   'ta-nehisi'
// // ];
// app.get('/people/:person', function (req, res, next) {
//   var person = req.params.person.toLowerCase();
//   if (peopleData[person]) {
//     res.status(200).render('photoPage', peopleData[person]);
//   } else {
//     next();
//   }
// });
//
app.listen(port, function () {
  console.log("== Server listening on port", port);
})
