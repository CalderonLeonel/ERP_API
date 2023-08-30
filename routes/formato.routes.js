import express from 'express';
import formatos from '../controllers/forma';

const router = express.Router();


router.get('/listarformatos', formatos.listarformatos);
router.get('/listarformatosinh', formatos.listarformatosinh);
router.post('/addformato/:p1,:p2', formatos.addformato);
router.post('/updformato/:p1,:p2,:p3', formatos.updformato);
router.post('/offformato/:p1', formatos.offformato);
router.post('/onformato/:p1', formatos.onformato);

module.exports = router;