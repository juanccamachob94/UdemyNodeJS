fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])



const fs = require('fs');

console.clear();
const base = 5;
let salida = '';

for (let i = 1; i <= 10; i++)
  salida += `${base} x ${i} = ${base * i}\n`;

console.log(salida);


fs.writeFile('tabla-5.txt', salida, () => {
  if(err) throw err;
  console.log('tabla creada');
});
