const colors = require('colors/safe');
const { argv } = require('./helpers/yargs_argv');
const { createFile } = require('./helpers/file_creator')

const testMethod = async(value) => {
  return value.toString();
}
// evidence try,catch(err) { throw err; } is not neccessary
const validateThrowError = () => {
  testMethod(null)
    .then(result => console.log(colors.blue(`result: ${result}`)))
    .catch(err => console.log(colors.red(`catch error: ${err}`)));
}

createFile(argv.base, argv.enabledLog)
  .then(result => console.log(colors.blue(`result: ${result}`)))
  .catch(err => console.log(colors.red(`catch error: ${err}`)));
