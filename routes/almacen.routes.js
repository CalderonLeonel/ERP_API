import express from 'express';
import almacen from '../controllers/alm';

const router = express.Router();

router.get('/listaralmacenes',almacen.listarAlmacenes);
router.get('/listaralmacenesactivos',almacen.listarAlmacenesActivos);
router.get('/listaralmacenesinactivos',almacen.listarAlmacenesInactivos);
router.post('/agregaralmacen/:p1,:p2',almacen.agregarAlmacen);
router.post('/editaralmacen/:p1,:p2,:p3',almacen.actualizarAlmacen);
router.post('/eliminaralmacen/:p1',almacen.eliminarAlmacen);



router.get('/listaralmacenamiento',almacen.listarAlmacenamiento);
router.post('/agregaralmacenamiento/:p1,:p2,:p3',almacen.agregarAlmacenamiento);
router.post('/editaralmacenamiento/:p1,:p2,:p3',almacen.editarAlmacenamiento);
router.post('/eliminaralmacenamiento/:p1,:p2',almacen.eliminarAlmacenamiento);


module.exports = router;