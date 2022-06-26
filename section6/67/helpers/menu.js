require('colors');
const { write } = require('./terminal');

const separator = '=';
const menuOptions = [
  {
    name: 'Search city',
    value: 1
  },
  {
    name: 'History',
    value: 2
  },
  {
    name: 'Exit',
    value: 0 // this option is invalid on the library
  }
];

let printMenuHeader = () => {
  const numSeparators = 50;
  write(separator.repeat(numSeparators).green);
  write('Select an option'.white);
  write(separator.repeat(numSeparators).green);
  write('\n', false);
}

let buildMenuOptions = () => {
  return menuOptions.map((menuOption, index) => ({
    name: `${(menuOption.value.toString() + '.').green} ${menuOption.name}`,
    value: menuOption.value
  }));
}

module.exports = {
  buildMenuOptions,
  printMenuHeader
}
