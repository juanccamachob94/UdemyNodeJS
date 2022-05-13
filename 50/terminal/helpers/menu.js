require('colors');
const { write } = require('./terminal');

const separator = '=';
const menuOptions = [
  {
    name: 'Create task'
  },
  {
    name: 'List tasks'
  },
  {
    name: 'List completed tasks'
  },
  {
    name: 'List pending tasks'
  },
  {
    name: 'Complete task(s)'
  },
  {
    name: 'Remove task'
  },
  {
    name: 'Exit',
    value: 0
  }
];

let printMenuHeader = () => {
  const numSeparators = 50;
  write(separator.repeat(numSeparators).green);
  write('Select an option'.green);
  write(separator.repeat(numSeparators).green);
  write('\n', false);
}

let buildMenuOptions = () => {
  return menuOptions.map((option, index) => {
    let optionName = option.name;
    let optionValue = (option.value || index);
    return `${optionValue.toString().green}. ${optionName}`;
  });
}

module.exports = {
  buildMenuOptions,
  printMenuHeader
}
