import express from 'express';
import proveedor from '../controllers/prov';

const router = express.Router();

router.get('/listarproveedores',proveedor.listarproveedores);
router.get('/listarproveedoresactivos',proveedor.listarProveedoresActivos);
router.get('/listarproveedoresinactivos',proveedor.listarProveedoresInactivos);
router.get('/insertar',proveedor.agregarProveedor);
router.get('/editar',proveedor.actualizarProveedor);
router.get('/anular',proveedor.eliminarProveedor);

module.exports = router;