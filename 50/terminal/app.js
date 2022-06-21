const { readDB, saveDB } = require('./helpers/file_saver');
const { listenInquirerMenu, listenPauseInquirerMenu, readInputInquirerMenu } =
  require('./helpers/inquirer');
const { write } = require('./helpers/terminal');
const Tasks = require('./models/tasks');
const Task = require('./models/task');

const main = async() => {
  const tasks = new Tasks();
  const tasksDB = readDB();
  if(tasksDB)
    tasks.loadsTasksfromArray(tasksDB);

  let opt = undefined;
  do {
    opt = await listenInquirerMenu();
    switch(opt) {
      case 1:
        tasks.createTask(await readInputInquirerMenu());
        break;
      case 2:
        tasks.printList();
        break;
      case 3:
        tasks.printList(Task.statuses.completed);
        break;
      case 4:
        tasks.printList(Task.statuses.pending);
        break;
    }
    saveDB(tasks.list);
    await listenPauseInquirerMenu();
  } while(opt !== 0);
}

main();
