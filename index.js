const express = require('express');
const morgan = require('morgan');

const app = express();

let topMovies = [ {
  title: 'The Notebook'
},
{
  title: 'The Nightmare Before Christmas'
},
{
  title: 'Call Me By Your Name'
},
{
  title: 'Kill Bill'
},
{
  title: 'The Conjuring'
},
{
  title: 'Psycho'
},
{
  title: 'Eternal Sunshine Of The Spotless Mind'
},
{
  title: 'The Shining'
},
{
  title: 'Jaws'
},
{
  title: 'mother!'
} ]

app.use(morgan('common'));

// GET requests
app.get('/', function(req, res) {
  res.send('Welcome to my movie app!')
});
app.get('/movies', function(req, res) {
  res.json(topMovies)
});
app.get('/secreturl', function (req, res) {
  res.send('This is a secret url with super top-secret content.');
});

app.use(express.static('public'));

app.get('/documentation', function(req, res) {
  res.sendFile('public/documentation.html', { root : __dirname });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () =>
  console.log('Your app is listening on port 8080.')
);
