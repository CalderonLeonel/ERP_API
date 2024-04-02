import express from 'express';
import documento from '../controllers/doc';

const router = express.Router();

router.get('/listardocumentos',documento.listardocumentos);
router.post('/insertar/:p1,:p2,:p3,:p4,:p5',documento.agregarDocumento);
router.post('/editar/:p1,:p2,:p3,:p4,:p5,:p6',documento.actualizarDocumento);
router.post('/anular/:p1',documento.eliminarDocumento);
router.get('/descargar/:p1',documento.download);
router.get('/descargarImagen/:p1',documento.downloadImage);
router.get('/listararchivos/',documento.getListFiles);
router.get('/listararchivosadq/',documento.getListFilesAdq);
router.get('/listararchivosinv/',documento.getListFilesInv);
router.get('/obtenerUltimo/',documento.getLastDoc);
router.get('/listarempleadosdespedidos/',documento.getFiredEmployees);

module.exports = router;