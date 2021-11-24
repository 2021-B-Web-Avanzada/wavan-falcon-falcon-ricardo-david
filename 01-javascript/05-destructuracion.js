const adrian = {
    nombre:"Adrian"
};
const carolina ={
    nombre: "Carolina",
    apellido: "Eguez"
};
const adrianCarolina = { //creando una nueva referncia
    ...carolina, //1 el orden es importante para propiedades que se repiten
    ...adrian, //2 el ultimo reemplaza a los anteriores
};
console.log('adrianCarolina', adrianCarolina);


//destructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno, //el orden importa
    ...arregloDos,
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo); //console.log(1,2,3,4,5....10)