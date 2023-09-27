import express from "express";
import lineas from '../controllers/lin';

const router = express.Router();

router.get('/listarlineas', lineas.listarlineas);
router.get('/listarlineasinh', lineas.listarlineasinh);
router.post('/addlinea/:p1,:p2', lineas.addlinea);
router.post('/updlinea/:p1,:p2,:p3', lineas.updlinea);
router.post('/offlinea/:p1', lineas.offlinea);
router.post('/onlinea/:p1', lineas.onlinea);



module.exports = router;