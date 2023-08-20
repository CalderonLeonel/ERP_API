import express from 'express';
import almacen from '../controllers/alm';

const router = express.Router();

router.get('/listaralmacenes',almacen.listarAlmacenes);

module.exports = router;