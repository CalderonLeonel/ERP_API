import express from 'express';
import inventario from '../controllers/inv';

const router = express.Router();

router.get('/listarinventario', inventario.listarTransacciones);
router.get('/listarinventarioactivo', inventario.listarTransaccionesActivas);
router.get('/listarinventarioinactivo', inventario.listarTransaccionesInactivas);

router.post('/agregarinventario/:p1,:p2,:p3,:p4,:p5', inventario.agregarTransaccion);
router.post('/agregarinventariosalida/:p1,:p2,:p3,:p4,:p5', inventario.agregarTransaccionSalida);
router.post('/actualizarinventario/:p1,:p2,:p3,:p4,:p5,:p6', inventario.actualizarTransaccion);
router.post('/eliminarinventario/:p1', inventario.anularTransaccion);


router.get('/listarstockalmacen', inventario.listarStockAlmacen);
router.get('/listarstock/:p1', inventario.listarStock);
router.get('/listarProductos/:p1', inventario.listarProductos);


router.get('/listaritem', inventario.listarItem);
router.get('/listaritemdisponibles', inventario.listarItemActivoInventario);
router.get('/listaritemactivo', inventario.listarItemActivo);
router.get('/listariteminactivo', inventario.listarItemInactivo);
router.get('/listaritemalmacenados',inventario.listarItemAlmacenado);

router.post('/agregaritem/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10,:p11', inventario.agregarItem);
router.post('/actualizaritem/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10,:p11,:p12', inventario.actualizarItem);
router.post('/eliminaritem/:p1', inventario.eliminarItem);

router.post('/agregarprecioitem/:p1,:p2', inventario.agregarPrecioItem);

router.get('/listarcategoria', inventario.listarCategoria);
router.get('/listarcategoriaactivo', inventario.listarCategoriaActivo);
router.get('/listarcategoriainactivo', inventario.listarCategoriaInactivo);

router.post('/agregarcategoria/:p1,:p2', inventario.agregarCategoria);
router.post('/actualizarcategoria/:p1,:p2,:p3', inventario.actualizarCategoria);
router.post('/eliminarcategoria/:p1', inventario.eliminarCategoria);
router.post('/activarcategoria/:p1', inventario.activarCategoria);

router.get('/listarsubcategoria', inventario.listarSubcategoria);
router.get('/listarsubcateriasde/:p1', inventario.listarSubcategoriaDe);
router.get('/listarsubcategoriaactivo', inventario.listarSubcategoriaActivo);
router.get('/listarsubcategoriainactivo', inventario.listarSubcategoriaInactivo);

router.post('/agregarsubcategoria/:p1,:p2,:p3', inventario.agregarSubcategoria);
router.post('/actualizarsubcategoria/:p1,:p2,:p3,:p4', inventario.actualizarSubcategoria);
router.post('/eliminarsubcategoria/:p1', inventario.eliminarSubcategoria);




router.get('/listarstanditem/:p1', inventario.listardetallestand);


router.get('/listarexistencias/', inventario.listarExistencias);

router.get('/listarsaldoalmacenitem/', inventario.listarSaldoAlmacenItem);
router.get('/listarsaldoitem/:p1', inventario.listarSaldoItem);

module.exports = router;