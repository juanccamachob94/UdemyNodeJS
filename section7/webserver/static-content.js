const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.get('*', (req, res) => {
  res.send('Page not found!');
});

app.listen(port, () => console.log(`running on port ${port}`));
