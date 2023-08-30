import express from 'express';
import inventario from '../controllers/inv';

const router = express.Router();

router.get('/listarinventario',inventario.listarTransacciones);
router.get('/listarinventarioactivo',inventario.listarTransaccionesActivas);
router.get('/listarinventarioinactivo',inventario.listarTransaccionesInactivas);

router.get('/agregarinventario',inventario.agregarTransaccion);
router.get('/actualizarinventario',inventario.actualizarTransaccion);
router.get('/eliminarinventario',inventario.anularTransaccion);



router.get('/listaritem',inventario.listarItem);
router.get('/listaritemactivo',inventario.listarItemActivo);
router.get('/listariteminactivo',inventario.listarItemInactivo);

router.get('/agregaritem',inventario.agregarItem);
router.get('/actualizaritem',inventario.actualizarItem);
router.get('/eliminaritem',inventario.eliminarItem);



router.get('/listartipodeitem',inventario.listarTipoItem);
router.get('/listartipodeitemactivo',inventario.listarTipoItemActivo);
router.get('/listartipodeiteminactivo',inventario.listarTipoItemInactivo);

router.get('/agregartipodeitem',inventario.agregarTipoItem);
router.get('/actualizartipodeitem',inventario.actualizarTipoItem);
router.get('/eliminartipodeitem',inventario.eliminarTipoItem);


module.exports = router;