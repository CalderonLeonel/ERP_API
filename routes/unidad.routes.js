import express from "express";
import unidades from '../controllers/unid';

const router = express.Router();


router.get('/listarunidades', unidades.listarunidades);
router.post('/addunidad/:p1', unidades.addunidad);
router.post('/editarunidad/:p1,:p2', unidades.editarunidad);
router.post('/offunidad/:p1', unidades.offunidad);
router.post('/onunidad/:p1', unidades.onunidad)


module.exports = router;