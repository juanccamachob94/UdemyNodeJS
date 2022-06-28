module.exports = {
  write: function() { // maybe arrow function is not valid here to use arguments
    validArguments = arguments.length == 2 ? { '0': arguments['1'] } : arguments;
    args = Object.values(arguments);
    numArgs = args.length;
    try {
      args.slice(0, -1).forEach((arg, index) => {
        if(arg) {
          process.stdout.write(arg.toString());
          if(index < numArgs - 1)
            process.stdout.write(' ');
        }
      });
      if (!args.length)
        return;
      lastArgument = args[args.length - 1];
      if (typeof lastArgument !== 'boolean' && lastArgument)
        console.log(lastArgument);
      else if (lastArgument)
        process.stdout.write('\n');
    } catch(err) {
      args.forEach(arg => console.log(arg));
    }
  }
}
