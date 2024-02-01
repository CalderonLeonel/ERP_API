import express from 'express';
import inventario from '../controllers/inv';

const router = express.Router();

router.get('/listarinventario',inventario.listarTransacciones);
router.get('/listarinventarioactivo',inventario.listarTransaccionesActivas);
router.get('/listarinventarioinactivo',inventario.listarTransaccionesInactivas);

router.post('/agregarinventarioentrada/:p1,:p2,:p3,:p4,:p5',inventario.agregarTransaccion);
router.post('/agregarinventariosalida/:p1,:p2,:p3,:p4,:p5',inventario.agregarTransaccionSalida);
router.post('/actualizarinventario/:p1,:p2,:p3,:p4,:p5,:p6',inventario.actualizarTransaccion);
router.post('/eliminarinventario/:p1',inventario.anularTransaccion);



router.get('/listaritem',inventario.listarItem);
router.get('/listaritemactivo',inventario.listarItemActivo);
router.get('/listariteminactivo',inventario.listarItemInactivo);

router.post('/agregaritem/:p1,:p2,:p3,:p4,:p5',inventario.agregarItem);
router.post('/actualizaritem/:p1,:p2,:p3,:p4,:p5,:p6',inventario.actualizarItem);
router.post('/eliminaritem/:p1',inventario.eliminarItem);



router.get('/listartipodeitem',inventario.listarTipoItem);
router.get('/listartipodeitemactivo',inventario.listarTipoItemActivo);
router.get('/listartipodeiteminactivo',inventario.listarTipoItemInactivo);

router.post('/agregartipodeitem/:p1,:p2',inventario.agregarTipoItem);
router.post('/actualizartipodeitem/:p1,:p2,:p3',inventario.actualizarTipoItem);
router.post('/eliminartipodeitem/:p1',inventario.eliminarTipoItem);


router.get('/listarstanditem/:p1',inventario.listardetallestand);


router.get('/listarexistencias/',inventario.listarExistencias);

module.exports = router;