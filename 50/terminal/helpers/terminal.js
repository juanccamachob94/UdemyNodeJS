function hacerAlgo(...args) {
  console.log('arguments', args);
  args.slice(0, -1).forEach(argument => {
    process.stdout.write(argument);
  });
  if (!args.length)
    return;
  lastArgument = typeof args[args.length - 1];
  if (lastArgument !== 'boolean') {
    process.stdout.write(argument);
    process.stdout.write('\n');
  }
  else if (lastArgument)
    process.stdout.write('\n');
}
module.exports = {
  write: hacerAlgo
}
