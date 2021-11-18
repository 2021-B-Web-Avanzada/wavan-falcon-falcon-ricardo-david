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
    apellido:'Falcon',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas:['Cachetes','Pequitas','Panda'],
};

//Acceder  a las propiedades del objeto
ricardo.nombre; // "Ricardo"
ricardo.apellido; //"Falcon"
ricardo["nombre"]; //"RICARDO"
console.log(ricardo);
ricardo.nombre = "David";
console.log(ricardo);
ricardo["nombre"] = "Ricardo";
ricardo.sueldo; //undefined
console.log(ricardo.sueldo);

ricardo.sueldo=1.2;
console.log(ricardo.sueldo); //1.2
ricardo["gastos"]=0.8;
console.log(ricardo.gastos); //0.8
ricardo.nombre = undefined;
console.log(ricardo);
console.log(Object.keys(ricardo));
console.log(Object.values(ricardo));


delete ricardo.nombre //Eliminar la llave nombre
console.log(ricardo);

// Variables por valor o referencia
//Variables por valor en JS son las primitivas: number, string, boolean
let edadRicardo = 24;
let edadDavid = edadRicardo;     // guardamos una primitiva en otra variable
                                    // variables por valor
console.log(edadRicardo);//24
console.log(edadDavid); //24
edadRicardo = edadRicardo +1;
console.log(edadRicardo); // 25
console.log(edadDavid); //24

// variables por referencia: object ({},[])
// let rafael = {
//     nombre: "Rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre="Lenin";
// console.log(rafael);
// console.log(lenin);
//
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

let rafael = {
    nombre: "Rafael"
};

let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre="Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);


//clonar arreglos
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);

