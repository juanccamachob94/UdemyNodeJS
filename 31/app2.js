const { crearArchivo } = require('./helpers/multiplicar');

crearArchivo(8)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));
