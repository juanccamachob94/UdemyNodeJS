const fs = require('fs');

let fileRoute = './db/data.json';

module.exports = {
  saveDB: (data) => {
    fs.writeFileSync(fileRoute, JSON.stringify(data));
  },
  readDB: () => {
    if(fs.existsSync(fileRoute))
      return JSON.parse(fs.readFileSync(fileRoute, { encoding: 'utf-8' }));
    return null;
  }
}
