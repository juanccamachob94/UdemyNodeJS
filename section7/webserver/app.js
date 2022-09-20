require('dotenv').config();

const hbs = require('hbs');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static('public'));
let simpleData = {
  name: 'Pedro Pérez',
  title: 'Node Course'
};

app.get('/', (req, res) => {
  // res.render('home');
  res.render('home', simpleData);
});


app.get('/generic', (req, res) => {
  res.render('generic', simpleData);
});

app.get('/elements', (req, res) => {
  res.render('elements', simpleData);
});

app.get('/:resource', (req, res) => {
  let htmlFilename = req.params.resource;
  let fileName = htmlFilename.endsWith(".html") ? htmlFilename : `${htmlFilename}.html`;
  res.sendFile(`${__dirname}/public/${fileName}`);
});

app.get('*', (req, res) => {
  res.send('Page not found!');
});

app.listen(process.env.PORT, () => console.log(`running on port ${process.env.PORT}`));
