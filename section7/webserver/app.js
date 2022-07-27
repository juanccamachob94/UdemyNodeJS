const hbs = require('hbs');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);


app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.render('home');
  res.render('home', {
    name: 'Pedro Pérez',
    title: 'Node Course'
  });
});


app.get('/generic', (req, res) => {
  res.render('generic');
});

app.get('/elements', (req, res) => {
  res.render('elements');
});

app.get('/:resource', (req, res) => {
  let htmlFilename = req.params.resource;
  let fileName = htmlFilename.endsWith(".html") ? htmlFilename : `${htmlFilename}.html`;
  res.sendFile(`${__dirname}/public/${fileName}`);
});

app.get('*', (req, res) => {
  res.send('Page not found!');
});

app.listen(port, () => console.log(`running on port ${port}`));
