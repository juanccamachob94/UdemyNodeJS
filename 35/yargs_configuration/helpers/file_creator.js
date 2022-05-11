const fs = require('fs');

module.exports = {
  createFile: async (base = 5) => {
    const upperLimit = 15;
    const lowerLimit = 1;
    const fileName = `table-${base}.txt`;
    let output = '';

    for (let i = lowerLimit; i <= upperLimit; i++)
      output += `${base} x ${i} = ${base * i}\n`;

    console.clear();
    console.log(output);
    try {
      fs.writeFileSync(fileName, output);
      return fileName;
    } catch (err) {
      throw err;
    }
  }
}
