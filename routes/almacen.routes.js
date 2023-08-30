import express from 'express';
import almacen from '../controllers/alm';

const router = express.Router();

router.get('/listaralmacenes',almacen.listarAlmacenes);
router.get('/listaralmacenesactivos',almacen.listarAlmacenesActivos);
router.get('/listaralmacenesinactivos',almacen.listarAlmacenesInactivos);
router.get('/agregaralmacenamien',almacen.agregarAlmacen);
router.get('/editaralmacenamien',almacen.editarAlmacena);
router.get('/eliminaralmacenamien',almacen.eliminarAlmacen);



router.get('/listaralmacenamiento',almacen.listarAlmacenamiento);
router.get('/agregaralmacenamiento',almacen.agregarAlmacenamiento);
router.get('/editaralmacenamiento',almacen.editarAlmacenamiento);
router.get('/eliminaralmacenamiento',almacen.eliminarAlmacenamiento);


module.exports = router;