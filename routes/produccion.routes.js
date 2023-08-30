import express from "express";
import produccion from '../controllers/produ';

const router = express.Router();

router.get('/listarproduccion', produccion.listarproduccion);
router.get('/listarproduccioninh', produccion.listarproduccioninh);
router.post('/addproduccion/:p1,:p2', produccion.addproduccion);
router.post('/updproduccion/:p1,:p2,:p3', produccion.updproduccion);
router.post('/offproduccion/:p1', produccion.offproduccion);
router.post('/onproduccion/:p1', produccion.onproduccion);



module.exports = router;