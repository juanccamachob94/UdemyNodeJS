module.exports = {
  argv: require('yargs')
    .options({
      'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 12
      },
      'l': {
        alias: 'enabledLog',
        default: false,
        description: 'Terminal log enabled/disabled',
        type: 'boolean',
        demandOption: true
      }
    })
    .check((argv, options) => {
      if(isNaN(argv.b))
        throw 'base must be a number';
      return true;
    }).argv
}
