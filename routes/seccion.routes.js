import express from 'express';
import seccion from '../controllers/sec';

const router = express.Router();

router.get('/listarsecciones',seccion.listarSecciones);
router.get('/listarseccionesactivas',seccion.listarSeccionesActivas);
router.get('/listarseccionesactivas',seccion.listarSeccionesInactivas);
router.get('/agregarseccion',seccion.agregarSeccion);
router.get('/actualizarseccion',seccion.actualizarSeccion);
router.get('/eliminarseccion',seccion.eliminarSeccion);
module.exports = router;