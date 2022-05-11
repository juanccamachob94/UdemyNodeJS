const fs = require('fs');

const base = 5;
const upper_limit = 15;
const lower_limit = 1;
let salida = '';

for (let i = lower_limit; i <= upper_limit; i++)
  salida += `${base} x ${i} = ${base * i}\n`;

console.clear();
console.log(salida);
try {
  fs.writeFileSync(`tabla-${base}.txt`, salida);
  console.log(`tabla-${base}.txt generado`);
} catch(err) {
  throw err;
}


