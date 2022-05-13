const printValue = (v = 'hello') => console.log(`Message: ${v}`);

printValue('World');
printValue(undefined); // es lo mismo que printValue()
printValue();
