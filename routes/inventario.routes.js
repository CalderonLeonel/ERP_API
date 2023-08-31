import express from 'express';
import inventario from '../controllers/inv';

const router = express.Router();

router.get('/listarinventario',inventario.listarTransacciones);
router.get('/listarinventarioactivo',inventario.listarTransaccionesActivas);
router.get('/listarinventarioinactivo',inventario.listarTransaccionesInactivas);

router.get('/agregarinventario/:p1,:p2,:p3,:p4,:p5,:p6',inventario.agregarTransaccion);
router.get('/actualizarinventario/:p1,:p2,:p3,:p4,:p5,:p6,:p7',inventario.actualizarTransaccion);
router.get('/eliminarinventario/:p1',inventario.anularTransaccion);



router.get('/listaritem',inventario.listarItem);
router.get('/listaritemactivo',inventario.listarItemActivo);
router.get('/listariteminactivo',inventario.listarItemInactivo);

router.get('/agregaritem/:p1,:p2,:p3,:p4,:p5',inventario.agregarItem);
router.get('/actualizaritem/:p1,:p2,:p3,:p4,:p5,:p6',inventario.actualizarItem);
router.get('/eliminaritem/:p1',inventario.eliminarItem);



router.get('/listartipodeitem',inventario.listarTipoItem);
router.get('/listartipodeitemactivo',inventario.listarTipoItemActivo);
router.get('/listartipodeiteminactivo',inventario.listarTipoItemInactivo);

router.post('/agregartipodeitem/:p1,:p2',inventario.agregarTipoItem);
router.post('/actualizartipodeitem/:p1,:p2,:p3',inventario.actualizarTipoItem);
router.post('/eliminartipodeitem/:p1',inventario.eliminarTipoItem);


module.exports = router;