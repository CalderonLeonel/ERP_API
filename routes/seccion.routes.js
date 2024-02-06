import express from 'express';
import seccion from '../controllers/sec';

const router = express.Router();

router.get('/listarsecciones',seccion.listarSecciones);
router.get('/listarseccionesactivas',seccion.listarSeccionesActivas);
router.get('/listarseccionesactivas',seccion.listarSeccionesInactivas);
router.post('/agregarseccion/:p1,:p2,:p3',seccion.agregarSeccion);
router.post('/actualizarseccion/:p1,:p2,:p3,:p4',seccion.actualizarSeccion);
router.post('/eliminarseccion/:p1',seccion.eliminarSeccion);

router.get('/listarseccionalmacen/:p1',seccion.listardetallealmacen);

module.exports = router;