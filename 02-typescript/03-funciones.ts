
function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number{
    return numeroInicial;
}
//sumar numeros('asd','asd') //otros tipos de datos no permitidos
sumarNumeros(1,1,2,3,4,5);


function imprimir(mensaje:string): void{
    console.log('Hola ' + mensaje);
}
const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumerosTres: (number| string| boolean)[]=[1,'dos', true];
const arregloNumerosCuatro: Array<number| string| boolean > = [1,'dos', true];
let arregloNumerosCinco: number[] | string[] = [1,2];
arregloNumerosCinco = ['uno','dos']
