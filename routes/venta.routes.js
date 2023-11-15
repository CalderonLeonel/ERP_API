import express from "express";
import ventas from '../controllers/ven';

const router = express.Router();

router.get('/listarventas', ventas.listarventas);
router.get('/listarventasinh', ventas.listarventasinh);
router.post('/addventa/:p1,:p2', ventas.addventa);
router.post('/updventa/:p1,:p2,:p3', ventas.updventa);
router.post('/offventa/:p1', ventas.offventa);
router.post('/onventa/:p1', ventas.onventa);



module.exports = router;