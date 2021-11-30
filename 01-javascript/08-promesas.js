const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(// Definicion de la promesa
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa = new Promise(// Definición de la promesa
        (resolve, reject ) =>{
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }

    );
    return miPrimerPromesa
}

promesaEsPar(6)
.then( //aceptan un return de promesas
    (datosPromesa) =>{
        console.log(datosPromesa)
        return promesaElevarAlCuadrado(datosPromesa);
    }
) //try
    .then(
        (datosElevarAlCuadrado) =>{
            console.log(datosElevarAlCuadrado);

        }
    )
.catch(
    (error) =>{
        console.log(error)
    }
) //catch
.finally()//finally