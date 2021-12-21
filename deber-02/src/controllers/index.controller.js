const {Pool} = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'equipo_jugador',
    port: '5432'
    });

const getEquipos = async (req, res) =>{
    const response = await pool.query('SELECT * FROM equipos');
    // console.log(response.rows);
    // res.send('equipos');
    res.status(200).json(response.rows)
}

const obtenerEquipoId= async (req,res)=>{
    const id = req.params.id;
   const response = await pool.query('SELECT * FROM equipos WHERE id = $1', [id])
    res.json(response.rows)
}

const crearEquipos = async (req, res) =>{
    const {nombre_equipo, nombre_presidente, fundacion} =req.body;
    const response = await pool.query('INSERT INTO equipos (nombre_equipo, nombre_presidente, fundacion) VALUES ($1, $2, $3)', [nombre_equipo, nombre_presidente, fundacion]);
   console.log(response);
   res.json({
       message: 'Equipo creado satisfactoriamente',
       body:{
           equipos:{nombre_equipo, nombre_presidente, fundacion}

       }
   })
}

const actualizarEquipo = async (req, res) =>{
    const id = req.params.id;
    const {nombre_equipo, nombre_presidente, fundacion } = req.body;
    const response = await pool.query('UPDATE equipos SET nombre_equipo = $1, nombre_presidente = $2, fundacion = $3 WHERE id = $4', [nombre_equipo, nombre_presidente, fundacion, id]);
    console.log(response);
    res.json('Equipo actualizado satisfactoriamente');
}

const eliminarEquipo = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM equipos WHERE id = $1', [id])
    console.log(response);
    res.json(`Equipo ${id} eliminado correctamente`);
};

const getJugadores = async (req, res) =>{
    const response = await pool.query('SELECT * FROM jugadores');
    // console.log(response.rows);
    // res.send('equipos');
    res.status(200).json(response.rows)
}

const obtenerJugadorId= async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM jugadores WHERE id = $1', [id])
    res.json(response.rows)
}

const obtenerJugadoresEquipo= async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM jugadores WHERE id_equipo = $1', [id])
    res.json(response.rows)
}

const crearJugador = async (req, res) =>{
    const id= req.params.id;
    const {nombre_jugador, apellido_jugador, ecuatoriano, precio, pais} =req.body;
    const response = await pool.query('INSERT INTO jugadores (nombre_jugador, apellido_jugador, ecuatoriano, precio, pais, id_equipo) VALUES ($1, $2, $3, $4, $5, $6)', [nombre_jugador, apellido_jugador, ecuatoriano, precio, pais, id]);
    console.log(response);
    res.json({
        message: 'Jugador creado satisfactoriamente',
        body:{
            equipos:{nombre_jugador, apellido_jugador, ecuatoriano, precio, pais}

        }
    })
}

const actualizarJugador = async (req, res) =>{
    const id = req.params.id;
    const {nombre_jugador, apellido_jugador, ecuatoriano, precio, pais} = req.body;
    const response = await pool.query('UPDATE jugadores SET nombre_jugador = $1, apellido_jugador = $2, ecuatoriano = $3, precio = $4, pais = $5 WHERE id = $6', [nombre_jugador, apellido_jugador, ecuatoriano, precio, pais, id]);
    console.log(response);
    res.json('Jugador actualizado satisfactoriamente');
}

const eliminarJugador = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM jugadores WHERE id = $1', [id])
    console.log(response);
    res.json(`Jugador ${id} eliminado correctamente`);
};

module.exports = {
    getEquipos,
    obtenerEquipoId,
    crearEquipos,
    eliminarEquipo,
    actualizarEquipo,
    getJugadores,
    obtenerJugadorId,
    obtenerJugadoresEquipo,
    crearJugador,
    actualizarJugador,
    eliminarJugador

}
//RICARDO FALCON