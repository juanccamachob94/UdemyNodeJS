const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Start program');
console.time('start');

const user1 = getUsuarioSync(1);
console.log('user 1: ', user1);


const user2 = getUsuarioSync(2);
console.log('user 2: ', user2);

console.log('End')
console.timeEnd('start')
