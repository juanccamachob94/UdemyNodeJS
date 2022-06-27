const { listenInquirerMenu, listenPauseInquirerMenu } = require('./helpers/inquirer');
const { write } = require('./helpers/terminal');
const Search = require('./models/search');
const CitySearcher = require('./views/city_searcher');

const main = async () => {
  let opt = undefined;
  do {
    switch (opt = await listenInquirerMenu()) {
      case 1:
        // Show message
        // Search the places
        // Select the place
        // Weather
        // Show results
        write('Searching city...');
        break;
      case 2:
        write('This is the history');
        break;
    }
    await listenPauseInquirerMenu();
  } while (opt !== 0);
}

main();
