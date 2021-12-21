const {Router} = require('express');
const router = Router();
const { getEquipos, crearEquipos, obtenerEquipoId, eliminarEquipo,actualizarEquipo, getJugadores, obtenerJugadorId,obtenerJugadoresEquipo, crearJugador, actualizarJugador, eliminarJugador} = require('../controllers/index.controller')

router.get('/equipos', getEquipos);
router.get('/equipos/:id' ,obtenerEquipoId);
router.post('/equipos', crearEquipos);
router.delete('/equipos/:id' ,eliminarEquipo );
router.put('/equipos/:id', actualizarEquipo);
router.get('/jugadores/', getJugadores);
router.get( '/jugadores/:id',obtenerJugadorId);
router.get('/jugadores/equipo/:id', obtenerJugadoresEquipo);
router.post('/jugadores/equipo/:id', crearJugador);
router.put('/jugadores/equipo/:id', actualizarJugador);
router.delete('/jugadores/:id' ,eliminarJugador );




module.exports = router;


//RICARDO FALCON