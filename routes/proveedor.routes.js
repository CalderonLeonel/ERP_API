import express from 'express';
import proveedor from '../controllers/prov';

const router = express.Router();

router.get('/listarproveedores',proveedor.listarproveedores);
router.get('/listarproveedoresactivos',proveedor.listarProveedoresActivos);
router.get('/listarproveedoresinactivos',proveedor.listarProveedoresInactivos);
router.post('/insertar/:p1,:p2,:p3,:p4,:p5',proveedor.agregarProveedor);
router.post('/editar/:p1,:p2,:p3,:p4,:p5,:p6',proveedor.actualizarProveedor);
router.post('/anular/:p1,',proveedor.eliminarProveedor);

module.exports = router;