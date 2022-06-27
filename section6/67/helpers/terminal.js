module.exports = {
  write: function() { // maybe arrow function is not valid here to use arguments
    args = Object.values(arguments);
    numArgs = args.length;
    try {
      args.slice(0, -1).forEach((arg, index) => {
        process.stdout.write(arg);
        if(index < numArgs - 1)
          process.stdout.write(' ');
      });
      if (!args.length)
        return;
      lastArgument = args[args.length - 1];
      if (typeof lastArgument !== 'boolean') {
        process.stdout.write(lastArgument);
        process.stdout.write('\n');
      }
      else if (lastArgument)
        process.stdout.write('\n');
    } catch(err) {
      args.forEach(arg => console.log(arg));
    }
  }
}
