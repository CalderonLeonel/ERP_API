import express from 'express';
import documento from '../controllers/doc';

const router = express.Router();

router.get('/listardocumentos',documento.listardocumentos);
router.post('/insertar/:p1,:p2,:p3,:p4,:p5,:p6,:p7',documento.agregarDocumento);
router.post('/editar/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8',documento.actualizarDocumento);
router.post('/anular/:p1',documento.eliminarDocumento);

module.exports = router;