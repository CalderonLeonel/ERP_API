import express from 'express';
import seccion from '../controllers/sec';

const router = express.Router();

router.get('/listarsecciones',seccion.listarSecciones);

module.exports = router;