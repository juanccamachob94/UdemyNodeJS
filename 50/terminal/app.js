const { listenInquirerMenu, listenPauseInquirerMenu, readInputInquirerMenu } =
  require('./helpers/inquirer');
const { write } = require('./helpers/terminal');
const Tasks = require('./models/tasks');

const main = async() => {
  const tasks = new Tasks();
  let opt = undefined;
  do {
    opt = await listenInquirerMenu();
    switch(opt) {
      case 1:
        tasks.createTask(await readInputInquirerMenu());
        break;
      case 2:
        write(tasks._collection);
        break;
    }
    await listenPauseInquirerMenu();
  } while(opt !== 0);
}

main();
