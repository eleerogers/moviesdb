const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
//const { Client } = require('pg');
const db = require('./postgresql.js');
const eventController = require('./server/controllers/event-controller');

// inside requests use: 
// const client = new Client()
// client.connect()
//  .then(() => {
//  console.log('connection complete');
//  //do query stuff
// const sql = //sql query (i.e. 'INSERT INTO moviesdb (Title, Authors) VALUES ($1, $2)')
// const params = [req.body.title, req.body.authors]
// return client.query(sql, params);
// })
// .then((result) => {
//  console.log('result?', result);
//  res.redirect('/list');
// })
// .catch((err) => {
//  console.log('err', err);
//  res.redirect('/list');
// })

// require('dotenv').config();  // from tutorial setup
// console.log(process.env);

const app = express();

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache')
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client'));

// require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

app.get('/movies', (req, res) => {
  res.render('movies');
});

app.get('/query-page', (req, res) => {
  res.render('query-page');
});

app.get('/result-page', (req, res) => {
  res.render('result-page');
});

app.get('/:title', (req, res) => {
  
  db.any("SELECT title, year, genre, subgenre, scoreplusgrades FROM moviesdb WHERE title = $1", req.params.title)
      .then(function(data) {
        //success
        res.json(data);
      })
      .catch(function(error) {
        console.log(error);
      });


    // .then(() => {
    //   const sql = 'SELECT title, year, genre, subGenre, scorePlusGrades FROM "moviesdb" WHERE title = "Titanic"'
    //   //const params = [req.params.title]
    //   return client.query(sql)
    // })
    // .then((results) => {
    //   console.log('results?', results);
    //   res.render('result-page')
    // })
    // .catch((err) => {
    //   console.log('error', err);
    //   res.send('you had an error!');
    // })
});

// app.listen(process.env.PORT, () => {
//   console.log(`Listening on port ${process.env.PORT}.`);
// });

// module.exports = app;



// from James' code
// 

const http = require('http');

// //retrieve data from category
// db.query('SELECT name FROM category')
//   .then(result => {
//     result.forEach(row => {
//       console.log(row.name);
//     });
//   })
//   .catch(error => {
//     console.log('ERROR AT CATEGORY: ', error);
//   });

const server = http.createServer(app);

// app.get('/test', (req, res) => res.status(400).send('testing'));

// should I change this to 5006?  Is this even necessary
server.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});


// TEST COMMENT!!! AGAINNNNN