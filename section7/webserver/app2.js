const express = require('express');
const app = express();
const port = 3000;

// static content
app.use(express.static('public'));

app.get('/', (req, res) => { // disabled based app.use(express.static('public'))
  res.send('Homepage');
});

app.get('hola-mundo', (req, res) => {
  res.send('Hola Mundo message'); // ignored, static public have hola-mundo folder with index.html
});

app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.get('*', (req, res) => {
  res.send('Page not found!');
  // res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => console.log(`running on port ${port}`));
