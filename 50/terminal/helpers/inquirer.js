require('colors');
const inquirer = require('inquirer');
const basePath = require('./base_path')(1);
const { printMenuHeader, buildMenuOptions } = require(`${basePath}helpers/menu`);

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
    return option;
  }
}
