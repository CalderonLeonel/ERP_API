import express from 'express';
import almacen from '../controllers/alm';

const router = express.Router();

router.get('/listaralmacenes',almacen.listarAlmacenes);
router.get('/listaralmacenamiento',almacen.listarAlmacenamiento);

module.exports = router;