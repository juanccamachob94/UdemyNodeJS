require('colors');

// const { showMenu, pause } = require('./helpers/messages');
const { launchInquirerMenu } = require('./helpers/inquirer');

const main = async() => {
  let opt = undefined;
  do {
    opt = await launchInquirerMenu();
    console.log({ opt });
    // await pause();
  } while(opt !== '0');
}

main();
