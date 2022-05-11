const fs = require('fs');

const base = 5;
const upperLimit = 15;
const lowerLimit = 1;
const fileName = `tabla-${base}.txt`;
let salida = '';

for(let i = lowerLimit; i <= upperLimit; i++)
  salida += `${base} x ${i} = ${base * i}\n`;

console.clear();
console.log(salida);

fs.writeFile(fileName, salida, (err) => {
  if(err) throw err;
  return fileName;
});
