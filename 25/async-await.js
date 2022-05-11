const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Linda'
  },
  {
    id: 3,
    nombre: 'Karen'
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const nombreEmpleado = empleados.find(e => e.id == id)?.nombre;
    nombreEmpleado ? resolve(nombreEmpleado) : reject(`No existe el empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const valorSalario = salarios.find(s => s.id == id)?.salario;
    valorSalario ? resolve(valorSalario) : reject(`No existe el salario con id ${id}`);
  });
}

const getInfoUsuario = async() => {
  return 'Hola Mundo';
}

getInfoUsuario(); // es una promesa

getInfoUsuario()
  .then(msg => console.log(msg));


const getInfoUsuarioV2 = () => {
  return 'Hola Mundo';
}

getInfoUsuarioV2(); // es una función

// await sólo para funciones asíncronas



const getOfficialInfoUsuario = async(id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return empleado;
  } catch(err) {
    return err;
    // throw err;
  }
}


getOfficialInfoUsuario(1)
  .then(msg => console.log(msg));

