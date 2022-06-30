require('colors');

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
  console.log(separator.repeat(numSeparators).green);
  console.log('Select an option'.white);
  console.log(separator.repeat(numSeparators).green);
  console.log();
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
