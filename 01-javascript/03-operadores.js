const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARÁMETROS
//FIND
//devolver una expresion --> Truty Falsy

//devuelve el primero que cumpla es condicion

const requestFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian"; //Expresion = = =

        }
        );
    console.log('respuestaFind',requestFind); //CRISTIAN //SI NO ENCUENTRA DEVUELVE UNDEFINED

//ENVIAMOS UNA EXPRESIÓN -->TRUTY FALSY
// DEVUELVE EL PRIMERO QUE CUMPLA ESA CONDICIÓN
const respuestaIndex = arreglo
.findIndex(
    function (valorActual, indiceActual,arregloCompleto){
        return valorActual.nombre === "Cristian";
    }
);
console.log('respuestaIndex', respuestaIndex); //indice -->6 // no encuentra -->-1

// for (let i; i>arreglo.length;i--){
//     console.log('valorActual',arreglo[i]);
// }
//Foreach itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual,indiceActual, arregloCompleto){
            console.log('valorActual', valorActual)
        }
    );
console.log('respuestaForEach', respuestaForEach); //undefined


//Operador Map (Modificar o muta el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo

const requestMap = arreglo
.map(
    function(valorActual,indiceActual, arregloCompleto){
        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota:valorActual.nota+1,
        };
        return nuevoElemento;
    }
);
console.log('respuestaMap', requestMap);
console.log('arreglo', arreglo);

//Filter(filtrar el arreglo)
//enviamos una expresión Truty Falsy
// devuelve los elementos que cumplen esa condición
const requestFilter = arreglo
.filter(
    function(valorActual, indiceActual, arregloCompleto) {
        return valorActual.nota >=14;
}
);
console.log('requestFilter', requestFilter);
console.log('arreglo', arreglo);

//SOME --> EXPRESION
//DEVULEVE BOOLEANO
// HAY ALGUNA NOTA MENOR A NUEVE? SI O NO
//OR
const respuestaSome = arreglo
    .some(
        function(valorActual,indiceActual,arregloCompleto){
            return valorActual.nota  <9;
        }
    );
console.log('respuestaSome', respuestaSome);

//SOME --> EXPRESION
//DEVULEVE BOOLEANO
// TODAS LAS NOTAS SON MAYORES A 14? SI O NO
//AND
const respuestaEvery = arreglo
    .every(
       function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//[1,2,3,5,6,5,4,3,1]
//Reduce va de izquierda a derecha
// reduce right va de derecha a izquierda
//100 < 3 Puntos de vida
//100 -1 -2 -3 -5 -6 -5 -4 -3 -1
//0 +1 +2 +3 +5 +6 +5 +4 +3 +1
//[1,2,3,5,6,5,4,3,1]
const respuestaReduce = arreglo
.reduce(
    function (valorAcumulado, valorActual,indice,arreglo){
        return (valorAcumulado + valorActual.nota);
    },
    100 //  Acumulador
);
console.log('respuestaReduce', respuestaReduce);