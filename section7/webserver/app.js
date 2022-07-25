const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
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
