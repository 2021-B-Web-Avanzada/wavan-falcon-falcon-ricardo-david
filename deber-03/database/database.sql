CREATE DATABASE ng_equipos_jugadores_db;

USE ng_equipos_jugadores_db;

CREATE TABLE equipo(
    id_equipo INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_equipo VARCHAR(100) NOT NULL,
    nombre_presidente VARCHAR(100) NOT NULL,
    fundacion DATE NOT NULL,
    imagen VARCHAR(300) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jugador(
    id_jugador INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_equipo INT(11) NOT NULL,
    nombre_jugador VARCHAR(100) NOT NULL,
    apellido_jugador VARCHAR(100) NOT NULL,
    precio FLOAT NOT NULL,
    pais VARCHAR(100), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE jugador ADD CONSTRAINT FK_jugador_equipo FOREIGN KEY(id_equipo) REFERENCES equipo(id_equipo);
