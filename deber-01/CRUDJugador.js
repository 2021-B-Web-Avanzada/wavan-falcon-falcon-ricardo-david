const fs = require('fs/promises');
const archivo = 'jugadores.txt';

//lectura de obras de arte
const leerArchivo = async () => {
    try {
        const texto = await fs.readFile(`./${archivo}`);
        const json = JSON.parse(texto);
        return json;
    } catch (error) {
        throw error;
    }
}
const crearJugador = async (jugador) =>{
    try {
        const listaJugadores = await leerArchivo();
        const yaExiste = listaJugadores.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.id === jugador.id;
            }
        );
        if(!yaExiste){
            listaJugadores.push(jugador);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaJugadores));
        }
        else{
            throw 'Jugador ya registrado';
        }

    } catch (error) {
        if(error.code === 'ENOENT'){
            try {
                await fs.writeFile(`./${archivo}`,JSON.stringify([jugador]));
            } catch (errorW) {
                throw errorW;
            }
        }
        else{
            throw error
        }
    }
};

const actualizarJugador = async (idJugador,nuevoEcuatoriano,nuevoPrecio, nuevoPais) =>{
    try {
        let listaJugadores = await leerArchivo();
        const index = listaJugadores.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === idJugador;
        });
        if(index>=0){
            const jugadorAEditar = listaJugadores[index];
            jugadorAEditar.ecuatoriano = nuevoEcuatoriano;
            jugadorAEditar.precio = nuevoPrecio;
            jugadorAEditar.pais = nuevoPais;
            await fs.writeFile(`./${archivo}`,JSON.stringify(listaJugadores));
            return jugadorAEditar;
        }else{
            throw 'No se pudo actualizar: no se encuentra jugador';
        }
    } catch (error) {
        throw error;
    }
}

const eliminarJugador = async(jugadorId) =>{
    try {
        let listajugadores = await leerArchivo();
        const index = listajugadores.findIndex((valorActual,indice,arr)=>{
            return valorActual.id === jugadorId
        });
        if(index>=0){
            listajugadores.splice(index,1);
            await fs.writeFile(`./${archivo}`,JSON.stringify(listajugadores));
        }else{
            throw 'No se pudo eliminar: No se encuentra jugador';
        }
    } catch (error) {
        throw error;
    }
}

//export{crear,leer,actualizar,eliminar};
exports.leerArchivo = leerArchivo;
exports.crearJugador = crearJugador;
exports.actualizarJugador = actualizarJugador;
exports.eliminarJugador = eliminarJugador;


