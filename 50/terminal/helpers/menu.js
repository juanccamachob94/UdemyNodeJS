require('colors');
const { write } = require('./terminal');

const separator = '=';
const menuOptions = [
  {
    name: 'Create task',
    value: 1
  },
  {
    name: 'List tasks',
    value: 2
  },
  {
    name: 'List completed tasks',
    value: 3
  },
  {
    name: 'List pending tasks',
    value: 4
  },
  {
    name: 'Complete task(s)',
    value: 5
  },
  {
    name: 'Remove task',
    value: 6
  },
  {
    name: 'Exit',
    value: 0 // this option is invalid on the library
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
  return menuOptions.map((menuOption, index) => ({
    name: `${menuOption.value.toString().green}. ${menuOption.name}`,
    value: menuOption.value
  }));
}

module.exports = {
  buildMenuOptions,
  printMenuHeader
}
