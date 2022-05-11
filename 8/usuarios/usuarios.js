const getUsuarioSync = (id) => {
    const startPoint = new Date().getTime();
    while(new Date().getTime() - startPoint <= 3000) {
      // waiting
      // fetch on de DB
    }

  return {id, nombre: `User ${id}` };
}

const getUsuario = (id, callback) => {
  const user = {
    id,
    nombre: `User ${id}`
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
}

module.exports = {
  getUsuario,
  getUsuarioSync
};
