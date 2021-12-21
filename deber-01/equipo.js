class Equipo {
    constructor(id, nombreEquipo, nombrePresidente, fundacion, jugadores = []) {
        this.id = id;
        this.nombreEquipo = nombreEquipo;
        this.nombrePresidente = nombrePresidente;
        this.fundacion = fundacion;
        this.jugadores = jugadores;
    }
}

exports.Equipo = Equipo;