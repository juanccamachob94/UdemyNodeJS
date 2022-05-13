require('colors');

const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you do?',
    choices: ['opt1', 'opt2', 'opt3']
  }
];

const launchInquirerMenu = async() => {
  //console.clear();
  console.log('====================================='.green);
  console.log('Select an option'.green);
  console.log('=====================================\n'.green);

  return await inquirer.prompt(questions);
}

module.exports = { launchInquirerMenu }
