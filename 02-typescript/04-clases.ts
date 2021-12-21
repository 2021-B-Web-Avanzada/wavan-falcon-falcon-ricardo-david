class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; //Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //Modificador acceso ->propiedad de la clase
        public estadoCivil: string, //Modificador acceso ->propiedad de la clase

    ) {
        super(nombreParametro, apellidoParametro);
    }
}
const ricardo = new Usuario(
    'Ricardo',
    'Falcon',
    '1722627039',
    'soltero'
);
ricardo.nombre;
ricardo.apellido;
ricardo.cedula;
ricardo.estadoCivil