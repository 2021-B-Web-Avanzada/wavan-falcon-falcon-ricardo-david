const {Equipo} = require('./equipo');
const {Jugador} = require('./jugador');
const crudEquipo = require('./CRUDEquipo');
const crudJugadores = require('./CRUDJugador');
const inquirer = require('inquirer');
const main = async() => {
    console.log('EQUIPO-JUGADORES');
    let flag = true;
    while (flag){
        const opciones = '¿Menú de opciones? \n' +
            '1. Registrar Equipo \n' +
            '2. Listar Equipo \n' +
            '3. Actualizar informacion de equipo \n' +
            '4. Borrar equipo\n'+
            '5. Registrar jugador\n'+
            '6. Listar jugadores de Equipo\n' +
            '7. Actualizar jugador\n' +
            '8. Eliminar jugador\n'+
            '9. Salir\n';
        try {
            const respuesta = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'numLista',
                    message: opciones
                }
            ]);
            switch(respuesta.numLista){
                case 1:
                    console.log('\n*********\n Datos de Equipo \n********\n');
                    const datosEquipo = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'idEquipo',
                            message: 'Ingresa el identificador del Equipo'
                        },
                        {
                            type: 'input',
                            name: 'nombreEquipo',
                            message: 'Ingresa el nombre del equipo'
                        },

                        {
                            type: 'input',
                            name: 'nombrePresidente',
                            message: 'Ingrese el nombre del presidente del equipo'
                        },
                        {
                            type: 'number',
                            name: 'fundacion',
                            message: 'Ingresa el año de fundación del equipo'
                        }

                    ]);
                    let equipo = new Equipo(
                        datosEquipo.idEquipo,
                        datosEquipo.nombreEquipo,
                        datosEquipo.nombrePresidente,
                        datosEquipo.fundacion,);
                    crudEquipo.crearEquipo(equipo)
                        .then(()=>console.log("Equipo registrado exitosamente"))
                        .catch((err)=> console.error(err));
                    break;
                case 2:
                    const listaEquipos = await crudEquipo.leerArchivo();
                    const listaLegible = listaEquipos.map(
                        (valorActual, indice, arreglo)=>{
                            const {id, nombreEquipo, nombrePresidente, fundacion} = valorActual;
                            return `${id}: ${nombreEquipo}, ${nombrePresidente},${fundacion}`;
                        }
                    )
                    console.log('Lista de Equipos: \n', listaLegible);
                    break;
                case 3:
                    let nuevoEquipo = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'idEquipo',
                            message: 'Ingrese el ID del equipo'
                        },
                        {
                            type: 'input',
                            name: 'nuevoNombreEquipo',
                            message: 'Ingresa el nuevo nombre del equipo'
                        },

                        {
                            type: 'input',
                            name: 'nuevoNombrePresidente',
                            message: 'Ingrese el nuevo nombre del presidente del equipo'
                        },
                        {
                            type: 'number',
                            name: 'nuevoFundacion',
                            message: 'Ingresa el nuevo año de fundación del equipo'
                        }

                    ]);
                    crudEquipo.actualizarEquipo(new Equipo(
                        nuevoEquipo.idEquipo,
                        nuevoEquipo.nuevoNombreEquipo,
                        nuevoEquipo.nuevoNombrePresidente,
                        nuevoEquipo.nuevoFundacion
                    ))
                        .then(()=> console.log('Equipo actualizado exitosamente'))
                        .catch((err)=> console.error(err));
                    break;

                case 4:
                    let identificador = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'idEquipo',
                            message: 'Ingrese el ID del equipo'
                        }
                    ]);
                    crudEquipo.eliminarEquipo(identificador.idEquipo)
                        .then(()=>console.log('Equipo eliminado exitosamente'))
                        .catch((err)=> console.error(err));
                    break;
                case 5:
                    const datosJugador = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'nombreEquipo',
                            message: 'Ingresa el ID del equipo'
                        },
                        {
                            type: 'input',
                            name: 'nombreJugador',
                            message: 'Ingrese el nombre del jugador'
                        },
                        {
                            type: 'input',
                            name: 'apellidoJugador',
                            message: 'Ingrese el apellido del jugador'
                        },
                        {
                            type: 'confirm',
                            name: 'ecuatoriano',
                            message: 'el jugador es ecuatoriano?'
                        },
                        {
                            type: 'number',
                            name: 'precioJugador',
                            message: 'Ingrese el precio del jugador'
                        },
                        {
                            type: 'input',
                            name: 'pais',
                            message: 'Ingrese el pais de origen del jugador'
                        },

                    ]);
                    let jugador = new Jugador(
                        datosJugador.nombreJugador,
                        datosJugador.apellidoJugador,
                        datosJugador.ecuatioriano,
                        datosJugador.precioJugador,
                        datosJugador.pais

                    );
                    crudJugadores.crearJugador(jugador).then(() =>{
                        return crudEquipo.addJugador(jugador,datosJugador.nombreEquipo);
                    })
                        .then(()=>{console.log("Jugador registrado exitosamente!")})
                    break;
                case 6:
                    const respuesta = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: "Ingrese el identificador del equipo"
                        }
                    ]);
                    crudEquipo.listarJugadores(respuesta.id)
                        .then((listaJugadores) =>{
                            console.log('Jugadores del equipo', listaJugadores);
                        })
                        .catch((err) => console.log(err));
                    break;
                case 7:
                    const respuestaO = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'idE',
                            message: 'Ingresa el ID del equipo'
                        },
                        {
                            type: 'input',
                            name: 'idJ',
                            message: 'Ingresa el ID del jugador'
                        },
                        {
                            type: 'confirm',
                            name: 'nuevoEcuatoriano',
                            message: 'el jugador es ecuatoriano?'
                        },

                        {
                            type: 'number',
                            name: 'nuevoPrecioJugador',
                            message: 'Ingrese el precio del jugador'
                        },
                        {
                            type: 'input',
                            name: 'nuevoPais',
                            message: 'Ingrese el pais del jugador'
                        }


                    ]);
                    crudJugadores.actualizarJugador(
                        respuestaO.idJ,
                        respuestaO.nuevoEcuatoriano,
                        respuestaO.nuevoPrecioJugador,
                        respuestaO.nuevoPais,

                    ).then((juagadorEditado) => {
                        return crudEquipo.updateJugador(juagadorEditado,respuestaO.idE);
                    })
                        .then(()=> console.log('Datos de jugador actualizados exitosamente!'))
                        .catch((err) => {console.log(err)});
                    break;
                case 8:
                    const delDataO = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'idE',
                            message: 'Ingresa el ID del equipo'
                        },
                        {
                            type: 'input',
                            name: 'idJ',
                            message: 'Ingrese el ID del jugador'
                        }
                    ]);
                    crudJugadores.eliminarJugador(delDataO.idJ)
                        .then(()=>{
                            return crudEquipo.delJugador(delDataO.idJ, delDataO.idE);
                        })
                        .then(()=> console.log("Jugador Eliminada Exitosamente"))
                        .catch((err)=> console.log(err));
                    break;
                case 9:
                    flag = false;
                    break;
                default:
                    throw 'Error: Numero ingresado incorrecto';
            }

        } catch (error) {
            throw error;
        }
    }
}
main()
.catch((err)=> console.log(err) )
