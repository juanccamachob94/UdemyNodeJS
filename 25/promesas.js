const id = 3;

getEmpleado(id)
  .then(empleado => console.log(empleado))
  .catch(err => console.log(err));

getSalario(id)
  .then(salario => console.log(salario))
  .catch(err => console.log(err));


let nombre;
getEmpleado(id)
  .then(empleado => {
    nombre = empleado;
    return getSalario(id);
  })
  .then(salario => console.log(salario))
  .catch(err => console.log(err));
