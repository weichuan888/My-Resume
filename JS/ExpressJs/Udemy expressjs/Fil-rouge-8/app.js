const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
let frenchMovies= [];


app.use('/public',express.static(`public`));

// app.use(bodyParser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req,res)=> {
  const title = 'Films francais les trentes dernieres années';
  const frenchMovies = [
    { title: 'Le fabuleux destin d\'Amelie Poulain', year: 2001},
    { title: 'Buffet Froid', year: 1979},
    { title: 'Le diner des cons', year: 1998},
    { title: 'De rouilles et d\'os', year: 2012}
  ];
  // res.send('Bientot des films ici meme!');
  res.render('movies', {movies: frenchMovies, title: title});
});

// app.get('/movies-details', (req,res)=> {
//   res.render('movies-details');
// })

var urlencoded = bodyParser.urlencoded({extended:false});

app.post('/movies', urlencoded, (req,res)=> {
  console.log('Le titre:' ,req.body.movietitle);
  console.log('L\'année:' ,req.body.movieyear);
  const newMovie = {title: req.body.movietitle, year: req.body.movieyear};
  frenchMovies = [...frenchMovies, newMovie];
  console.log(frenchMovies);

  res.sendStatus(201);
})


app.get('/movies/add', (req,res)=> {
  res.send(`Voici un formulaire pour ajouter un film`);
});

// app.get('/movies/:id/:title', (req,res)=> {
//   const id = req.params.id;
//   const title = req.params.title;
//   // res.send(`Voici le film n° ${id}` );
//   // const title = "terminator";
//   res.render('movies-details', {movieid: id, movietitle:title});
// });

app.get('/movies/:id', (req,res)=> {
  const id = req.params.id;
  const title = req.params.title;
  res.render('movies-details', { movieid: id});
});




app.get('/', (req,res)=> {
  // res.send("hello <strong>world!</strong>");
  res.render('index');
});

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`);
})
