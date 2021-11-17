// variables ,js
// variables mutables e innmutables
//mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Inmutables
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";
//Vamos a prefererir CONST > LET > NUNCA VAR

//Tipos de variables
const numero = 1; //number
const sueldo = 1.2;  // number
const texto = "Ricardo"; // string
const apellido = "Falcon"; // string
const booleano = false; // boolean
const hijos = null; //object
const zapatos = undefined; //undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd")); //number
console.log(Number("asd1")); //Nan


//Truty Falsy
if(""){
    console.log("String vacio es verdadero");
}else{
    console.log("String vacio es Falsy");
}
if("Adrian"){
    console.log("String con datos es truty");
}else{
    console.log("String con datos Falso");
}

//Truty Falsy con numeros
if(-1){
    console.log("Negativos  es truty");
}else{
    console.log("Negativos  es Falsy");
}
if(0){
    console.log("Cero es Truty");
}else{
    console.log("Cero es Falso");
}
if(1){
    console.log("Positivos es Truty");
}else{
    console.log("Positivos es Falso");
}

//null y undefined
if(null){
    console.log("Null es Truty");
}else{
    console.log("Null es falso");
}
if(undefined){
    console.log("Undefined es truty");
}else{
    console.log("Undefined es falso");
}


//objetos JS (JSON) -Arreglos
const ricardo={
    nombre: "Ricardo",
    false:'Falcon',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas:['Cacjetes','Pequitas','Panda'],
};