const fs = require('fs');

const crearArchivo = async(base = 5) => {
  const upperLimit = 15;
  const lowerLimit = 1;
  const fileName = `tabla-${base}.txt`;
  let salida = '';

  for (let i = lowerLimit; i <= upperLimit; i++)
    salida += `${base} x ${i} = ${base * i}\n`;

  console.clear();
  console.log(salida);
  try {
    fs.writeFileSync(fileName, salida);
    return fileName;
  } catch (err) {
    throw err;
  }

}

module.exports = {
  crearArchivo
}
