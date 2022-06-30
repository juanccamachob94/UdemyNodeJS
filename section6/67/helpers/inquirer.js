require('colors');
const inquirer = require('inquirer');
const { printMenuHeader, buildMenuOptions } = require('./../helpers/menu');

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
    return (await inquirer.prompt(pauseInquirerQuestions)); // the value is unneccesary
  },
  readInquirerInput: async(message) => {
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
    const f = (await inquirer.prompt(readInputInquirerQuestions))[descriptionKey];
    return f;
  },
  selectPlaceId: async(places = []) => {
    const taskIdKey = 'placeId';
    choices = places.map((place, iterator) => {
      const itemId = `${iterator + 1}.`.green;
      return {
        value: place.id,
        name: `${itemId} ${place.place_name}`
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
        message: 'Select place:',
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
