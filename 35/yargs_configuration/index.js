const colors = require('colors');
const { argv } = require('./helpers/yargs_argv');
const { createFile } = require('./helpers/file_creator')

const testMethod = async(value) => {
  return value.toString();
}

const runSimplePromise = async (simplePromise) => {
  simplePromise
    .then(result => console.log(colors.blue(`result: ${result}`)))
    .catch(err => console.log(colors.red(`catch error: ${err}`)));
}

// evidence try,catch(err) { throw err; } is not neccessary
const validateThrowError = () => {
  runSimplePromise(testMethod(null));
}

const runFileCreation = () => {
  runSimplePromise(createFile(argv.base, argv.enabledLog));
}

console.log('Init'.trap);
runFileCreation();
