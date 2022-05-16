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
    const { option } = await inquirer.prompt(menuInquirerQuestions);
    return option;
  },
  listenPauseInquirerMenu: async() => {
    const { option } = await inquirer.prompt(pauseInquirerQuestions);
    write('\n', false);
    return option;
  },
  readInputInquirerMenu: async(message) => {
    const readInputInquirerQuestions = [
      {
        type: 'input',
        name: 'description',
        message,
        validate(value) {
          if(value.length === 0)
            return 'Por favor ingrese un valor';
          return true;
        }
      }
    ];

    const { description } = await inquirer.prompt(readInputInquirerQuestions);
    return description;
  }
}
