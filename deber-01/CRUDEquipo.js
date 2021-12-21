const fs = require('fs/promises');
const {Equipo} =require('./equipo');
const archivo = 'equipos.txt';
const leerArchivo = async () =>{
    try {
        const texto =await  fs.readFile(`./${archivo}`);
        const json = JSON.parse(texto);
        return json;
    }catch (error) {
        throw error;
    }
}

const crearEquipo = async (equipo) =>{
    try {
        const listaEquipos = await leerArchivo();
        const yaExiste = listaEquipos.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.id === equipo.id;
            }
        );
        if(!yaExiste){
            listaEquipos.push(equipo);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaEquipos));
        }
        else{
            throw 'Equipo ya registrado';
        }

    } catch (error) {
        if(error.code === 'ENOENT'){
            try {
                await fs.writeFile(`./${archivo}`,JSON.stringify([equipo]));
            } catch (errorW) {
                throw errorW;
            }
        }
        else{
            throw error
        }
    }
};

const actualizarEquipo = async (equipo) =>{
    try {
        let listaEquipos = await leerArchivo();
        const index = listaEquipos.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === equipo.id;
        });
        if(index>=0){
            const {id, jugadores} = listaEquipos[index];
            const {nombreEquipo,nombrePresidente,fundacion} = equipo;
            const nuevoEquipo = new Equipo(id,nombreEquipo,nombrePresidente,fundacion,jugadores);
            listaEquipos.splice(index,1,nuevoEquipo);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaEquipos));
        }else{
            throw 'No se pudo actualizar: no se encuentra equipo';
        }
    } catch (error) {
        throw error;
    }
}

const eliminarEquipo = async(equipoID) =>{
    try {
        let listaEquipos = await leerArchivo();
        const index = listaEquipos.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === equipoID;
        });
        if(index>=0){
            listaEquipos.splice(index,1);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaEquipos));
        }else{
            throw 'No se pudo eliminar: no se encuentra equipo';
        }
    } catch (error) {
        throw error;
    }
}

const addJugador = async(jugador, idEquipo) =>{
    try {
        let listaEquipos = await leerArchivo();
        const indiceEquipo = listaEquipos.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === idEquipo;
        });
        if(indiceEquipo >=0){
            let equipo = listaEquipos[indiceEquipo];
            equipo.jugadores.push(jugador);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaEquipos));
        }else{
            throw 'No se pudo añadir jugador: no se encuentra equipo';
        }
    } catch (error) {
        throw error;
    }
}

const listarJugadores = async (equipoId) =>{
    try {
        const equipos = await leerArchivo();
        const equipoA = equipos.find(
            (equipoActual, indice, arreglo) =>{
                return equipoActual.id === equipoId
            }
        );
        if(equipoA!== undefined){
            return equipoA.jugadores;
        } else{
            throw "Error: No se encuenta equipo";
        }
    } catch (error) {
        throw error
    }
}


const updateJugador = async (jugador, equipoId) =>{
    try {
        const equipos = await leerArchivo();
        const equipoA = equipos.find(
            (equipoActual, indice, arreglo) =>{
                return equipoActual.id === equipoId
            }
        );
        if(equipoA!== undefined){
            const jugadoresEquipo = equipoA.jugadores;
            const index = jugadoresEquipo.findIndex((valorActual,indice,arr)=>{
                return valorActual.id === jugador.id;
            });
            if(index>=0){
                jugadoresEquipo[index] = jugador;
                await fs.writeFile(`./${archivo}`,JSON.stringify(equipos));
            }else{
                throw 'No se pudo actualizar: no se encuentra jugador';
            }
        } else{
            throw "Error: No se encuenta equipo";
        }
    } catch (error) {
        throw error;
    }
};

const delJugador = async (jugadorId, equipoId) =>{
    try {
        const equipos = await leerArchivo();
        const equipoA = equipos.find(
            (equipoActual, indice, arreglo) =>{
                return equipoActual.id === equipoId
            }
        );
        if(equipoA!== undefined){
            const jugadoresEquipo = equipoA.jugadores;
            const index = jugadoresEquipo.findIndex((valorActual,indice,arr)=>{
                return valorActual.id === jugadorId;
            });
            if(index>=0){
                jugadoresEquipo.splice(index,1);
                await fs.writeFile(`./${archivo}`,JSON.stringify(equipos));
            }else{
                throw 'No se pudo Eliminar: no se encuentra jugador';
            }
        } else{
            throw "Error: No se encuenta equipo";
        }
    } catch (error) {
        throw error;
    }
};

// export{crear,leer,actualizar,eliminar};
exports.leerArchivo = leerArchivo;
exports.crearEquipo = crearEquipo;
exports.actualizarEquipo = actualizarEquipo;
exports.eliminarEquipo = eliminarEquipo;
exports.addJugador = addJugador;
exports.listarJugadores = listarJugadores;
exports.updateJugador = updateJugador;
exports.delJugador = delJugador;



