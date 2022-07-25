const PORT = 8080;
const http = require('http');

http.createServer((req, res) => {
  console.log(req);
  //res.writeHead(404);
  res.writeHead(200, { 'Content-Type': 'text/plain' }); //application/json application/csv
  res.setHeader('Content-Disposition', 'attachment; filename=file.csv');
  res.write(JSON.stringify({ id: 1 }));
  res.write('Hellow World');
  res.end();
})
.listen(PORT);

console.log(`Escuchando a través del puerto: ${PORT}`);
