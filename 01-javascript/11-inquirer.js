// const inquirer = require('inquirer');
//
// async function main() {
//     try {
//         const respuesta = inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'apellido',
//                     message: 'Ingresa tu nombre'
//                 },
//                 {
//                     type: 'input',
//                     name: 'edad',
//                     message: 'Ingresa tu edad'
//
//                 }
//
//             ]);
//         console.log('Respuesta', respuesta);
//
//     } catch (e) {
//         console.log(e);
//     }
// }
// main()
//11-inquirer.js
const inquirer = require('inquirer');
//npm install inquirer
async function main(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'ingresa tu Nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    }catch (e){
        console.error(e);
    }
}
main()