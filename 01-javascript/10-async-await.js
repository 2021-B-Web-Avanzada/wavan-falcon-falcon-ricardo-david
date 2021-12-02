const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('CONTENIDO LEER ARCHIVO')
            // rej('ERROR')
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('CONTENIDO ESCRIBIR ARCHIVO')
            // rej('ERROR')
        }
    );
}

//ASYNC AWAIT
//PODER UTILIZAR EN METODOS DE CLASES
// PODER UTILIZAR EM FUNCION
//AL MOMENTO DE USAR LA PALABRA ASYNC, ESA FUNCION SE CONVIERTE EN UNA PROMESA
// const ejemplo1 = async function () {
// }
// const ejemplo1 = async () => {
// }

async function ejercicio() {
    console.log('1');
    try {
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');


    } catch (error) {
        console.log(error);
        // throw new Error();
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;

}

ejercicio().then(
    (data)=>{
        console.log('ESTA ES LA RESPUESTA DEL ASYNC AWAIT', data);
    }
).catch().finally()
