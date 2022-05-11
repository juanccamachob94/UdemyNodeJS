const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('start');

getUsuario(1, (usuario) => {
  console.log('usuario 1: ', usuario);
});

getUsuario(2, (usuario) => {
  console.log('usuario 2: ', usuario);
  console.timeEnd('start');
});

console.log('Fin del programa');
