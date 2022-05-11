const { argv } = require('./helpers/yargs_argv');
const { createFile } = require('./helpers/file_creator')
const testMethod = async(value) => {
  return value.toString();
}
// evidence try,catch(err) { throw err; } is not neccessary
const validateThrowError = () => {
  testMethod(null)
    .then(result => console.log(`result: ${result}`))
    .catch(err => console.log('catch error'));
}

createFile(argv.base, argv.enabledLog);
