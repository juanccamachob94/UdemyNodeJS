require('colors');
const inquirer = require('inquirer');
const basePath = require('./base_path')(1);
const { printMenuHeader, buildMenuOptions } = require(`${basePath}helpers/menu`);
const { write } = require(`${basePath}helpers/terminal`);

const menuInquirerQuestions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you do?',
    choices: buildMenuOptions()
  }
];

const pauseInquirerQuestions = [
  {
    type: 'input',
    name: 'enter',
    message: `Press ${'enter'.green} to continue`
  }
];

module.exports = {
  listenInquirerMenu: async() => {
    console.clear();
    printMenuHeader();
    return (await inquirer.prompt(menuInquirerQuestions))['option'];
  },
  listenPauseInquirerMenu: async() => {
    const { option } = await inquirer.prompt(pauseInquirerQuestions);
    write('\n', false);
    return option;
  },
  readInputInquirerMenu: async(message) => {
    const descriptionKey = 'description';
    const readInputInquirerQuestions = [
      {
        type: 'input',
        name: descriptionKey,
        message,
        validate(value) {
          if(value.length === 0)
            return 'Por favor ingrese un valor';
          return true;
        }
      }
    ];
    return (await inquirer.prompt(readInputInquirerQuestions))[descriptionKey];
  },
  selectTaskItemToDelete: async(tasksList = []) => {
    const taskIdKey = 'taskId';
    choices = tasksList.map((task, iterator) => {
      const itemId = `${iterator + 1}.`.green;
      return {
        value: task.id,
        name: `${itemId} ${task.description}`
      }
    });
    choices.push({
      value: undefined,
      name: `${'0.'.green} Cancel`
    });
    const readInputInquirerQuestions = [
      {
        type: 'list',
        name: taskIdKey,
        message: 'Delete',
        choices
      }
    ];
    return (await inquirer.prompt(readInputInquirerQuestions))[taskIdKey];
  },
  confirm: async (message) => {
    const confirmationKey = 'confirmed';
    const questions = [
      {
        type: 'confirm',
        name: confirmationKey,
        message
      }
    ];
    return (await inquirer.prompt(questions))[confirmationKey];
  },
  toTasksCheckLists: async(tasksList = []) => {
    const taskIdKey = 'taskId';
    const readInputInquirerQuestions = [
      {
        type: 'checkbox',
        name: taskIdKey,
        message: 'Selected tasks',
        choices: tasksList.map((task, iterator) => {
          const itemId = `${iterator + 1}.`.green;
          return {
            value: task.id,
            name: `${itemId} ${task.description}`,
            checked: task.isCompleted()
          }
        })
      }
    ];
    return (await inquirer.prompt(readInputInquirerQuestions))[taskIdKey];    
  }
}
