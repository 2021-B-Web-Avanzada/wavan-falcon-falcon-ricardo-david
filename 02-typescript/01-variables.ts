let nombre: string = 'Ricardo'; //primitivo
let nombre2: String = 'Ricardo2'; //clase String
// nombre = 1;
nombre = 'David';

let edad: number =24;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;
//Duck Typing
let apellido = 'Falcon'; //string
apellido = 'Ricardo'; //igual a otros string
apellido.toUpperCase();//metodos string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () =>'2';

let edadMultiple: number|string| Date =2;
edadMultiple = '2';
edadMultiple =222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;
