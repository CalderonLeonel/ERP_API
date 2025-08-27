import express from 'express';
import proveedor from '../controllers/prov';

const router = express.Router();

router.get('/listarproveedores',proveedor.listarproveedores);
router.get('/listarproveedoresactivos',proveedor.listarProveedoresActivos);
router.get('/listarproveedoresinactivos',proveedor.listarProveedoresInactivos);
router.post('/insertar/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9',proveedor.agregarProveedor);
router.post('/insertarConArchivo/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10',proveedor.agregarProveedorArchivo);
router.post('/editar/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,p10',proveedor.actualizarProveedor);
router.post('/editararchivo/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,p10,p11',proveedor.actualizarProveedorarchivo);
router.post('/anular/:p1',proveedor.eliminarProveedor);


router.get('/listarcategoria', proveedor.listarCategoria);
router.get('/listarcategoriaactivo', proveedor.listarCategoriaActivo);
router.get('/listarcategoriainactivo', proveedor.listarCategoriaInactivo);

router.post('/agregarcategoria/:p1,:p2', proveedor.agregarCategoria);
router.post('/actualizarcategoria/:p1,:p2,:p3', proveedor.actualizarCategoria);
router.post('/eliminarcategoria/:p1', proveedor.eliminarCategoria);
router.post('/activarcategoria/:p1', proveedor.activarCategoria);

module.exports = router;