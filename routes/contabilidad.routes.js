import express from 'express';
import contabilidad from '../controllers/cont';

const router = express.Router();

// Rutas para cuentas contables
router.get('/listarcuentas', contabilidad.listarcuentas);
router.get('/listarcuentasinh', contabilidad.listarcuentasinh);
router.post('/addcuenta/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', contabilidad.addcuenta);
router.post('/updcuenta/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', contabilidad.updcuenta);
router.post('/offcuenta/:p1', contabilidad.offcuenta);
router.post('/oncuenta/:p1', contabilidad.oncuenta);

// Rutas para asientos contables
router.get('/listarasientos', contabilidad.listarAsientosContables);
router.get('/listarasientosinh', contabilidad.crearAsientoContable);
router.post('/addasiento/:p1', contabilidad.actualizarAsientoContable);
router.post('/updasiento/:id', contabilidad.eliminarAsientoContable);
router.post('/offasiento/:p1', contabilidad.offcuenta);
router.post('/onasiento/:p1', contabilidad.oncuenta);

// Rutas para detalles de asiento
router.get('/listardetalle/:asiento_id', contabilidad.listarDetallesAsiento);
router.post('/detalles', contabilidad.crearDetalleAsiento);
router.put('/detalles/:id', contabilidad.actualizarDetalleAsiento);
router.delete('/detalles/:id', contabilidad.eliminarDetalleAsiento);

export default router;