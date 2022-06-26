const { listenInquirerMenu, listenPauseInquirerMenu } = require('./helpers/inquirer');
const { write } = require('./helpers/terminal');


const main = async () => {
  let opt = undefined;
  do {
    switch (opt = await listenInquirerMenu()) {
      case 1:
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
