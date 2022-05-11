const fs = require('fs');

module.exports = {
  createFile: async (base, enabledLog) => {
    const upperLimit = 15;
    const lowerLimit = 1;
    const fileName = `table-${base}.txt`;
    let output = '';

    for(let i = lowerLimit; i <= upperLimit; i++)
      output += `${base} x ${i} = ${base * i}\n`;

    if(enabledLog) {
      console.clear();
      console.log(output);
    }

    try {
      fs.writeFileSync(fileName, output);
      return fileName;
    } catch (err) {
      throw err;
    }
  }
}
