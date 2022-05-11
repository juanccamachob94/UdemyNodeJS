module.exports = {
  argv: require('yargs')
    .options({
      'b': {
        alias: 'base',
        type: 'number'
      },
      'l': {
        alias: 'enabledLog',
        default: false,
        description: 'Terminal log enabled/disabled',
        type: 'boolean'
      }
    })
    .check((argv, options) => {
      if(isNaN(argv.b))
        throw 'base must be a number';
      return true;
    }).argv
}
