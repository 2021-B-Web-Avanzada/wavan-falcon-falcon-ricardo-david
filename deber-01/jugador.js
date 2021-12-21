class Jugador{
    constructor(nombreJugador, apellidoJugador, ecuatoriano, precio, pais) {
        this.id = `${nombreJugador}-${apellidoJugador}`;
        this.nombreJugador = nombreJugador;
        this.apellidoJugador = apellidoJugador;
        this.ecuatoriano = ecuatoriano;
        this.precio = precio;
        this.pais=pais;

    }
}
exports.Jugador = Jugador;