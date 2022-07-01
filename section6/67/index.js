require('dotenv').config();
const { listenInquirerMenu, listenPauseInquirerMenu } = require('./helpers/inquirer');
const Search = require('./models/search');
const CitySearcher = require('./views/city_searcher');

const main = async () => {
  Search.readOnDB();
  let opt = undefined;
  do {
    opt = await listenInquirerMenu();
    switch (opt) {
      case 1:
        if(!await CitySearcher.process())
          continue; // skip "Press enter to continue"
        break;
      case 2:
        Search.capitalizedHistory.forEach((place, index) => {
          const validIndex = `${index + 1}`.green;
          console.log(`${validIndex}. ${place}`);
        });

        break;
    }
    await listenPauseInquirerMenu();
  } while (opt !== 0);
}

main();
