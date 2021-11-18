let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true,1,1.1,"Ricardo","David",undefined,null,{},[1,2]];
arreglo = [6, 7, 8, 9, 10];

//for of
for (let numero of arreglo){ //VALORES
    console.log('numero', numero);
}

//for in //INDICES
for (let indice in arreglo){ //INDICES
    arreglo[indice];
    console.log('indice', indice);

}
let objetoPrueba = {a:'1',b:'2', c:'3'};
for (let llave in objetoPrueba){
    console.log('llave', llave)
}
