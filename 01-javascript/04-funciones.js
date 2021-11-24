function soloNumeros(a,b,c){
    return a - b + c; //valor a devolver
}
//JS permite el uso de funciones sin validaciones
// soloNumeros('v',true,[1,2,3]);
// soloNumeros((a) =>a, (a) =>a, (a) =>a);
// soloNumeros(1,2,3,4,5,6,78,9);
// soloNumeros();

function soloLetras(a,b,c){ //undefined
    console.log(a,b,c);
}

//Funciones nombradas -named functions
function funcionNombrada() {
}
//Funciones anonimas
const funcionSinNombre1 = function () {};
var funcionSinNombre2 = function () {};
let funcionSinNombre3 = function () {};
[].forEach(function () {})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anonimas -Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach( ()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();


const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) =>{
    return x+1;
};
const funcionArrow6 =(x) => x+1; //FAT ARRPW FUNCTIONS
                                // UNA SOLA LINEA
                                // OMITO RETURN
                                //OMITO LLAVES
const funcionArrow7 = x =>x+1; //si solo tenemos un parametro omito parentesis

const functionArrow8 = (x,y,z) => x + y + z;


// parametros infinitos que llegan en un arreglo
//solo se puede tener una de estas por funcion
function sumarNumeros(...otrosNumeros){// parametros infinitos[2,3,4,5]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) =>{
            total = total + valorActual;
        }
    );
    return total
    // return otrosNumeros.reduce((a,v) => a+v,0)
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)