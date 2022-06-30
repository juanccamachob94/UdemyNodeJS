require('dotenv').config();
const { listenInquirerMenu, listenPauseInquirerMenu } = require('./helpers/inquirer');
const Search = require('./models/search');
const CitySearcher = require('./views/city_searcher');

const main = async () => {
  let opt = undefined;
  do {
    opt = await listenInquirerMenu();
    switch (opt) {
      case 1:
        await CitySearcher.process();
        break;
      case 2:
        console.log('This is the history');
        break;
    }
    await listenPauseInquirerMenu();
  } while (opt !== 0);
}

main();
