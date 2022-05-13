const { listenInquirerMenu, listenPauseInquirerMenu } = require('./helpers/inquirer');

const main = async() => {
  let opt = undefined;
  do {
    opt = await listenInquirerMenu();
    await listenPauseInquirerMenu();
  } while(opt !== '0');
}

main();
