import express from 'express';
import inventario from '../controllers/inv';

const router = express.Router();

router.get('/listarinventario',inventario.listarTransacciones);
router.get('/listaritem',inventario.listarItem);
router.get('/listartipodeitem',inventario.listarTipoItem);


module.exports = router;