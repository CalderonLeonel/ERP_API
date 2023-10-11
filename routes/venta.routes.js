import express from "express";
import ventas from '../controllers/ven';

const router = express.Router();

router.get('/listarventas', ventas.listarventas);
router.get('/listarventasinh', ventas.listarventasinh);
router.post('/registrarventa/:p1,:p2,:p3,:p4', ventas.registrarventa);
router.post('/editarventa/:p1,:p2,:p3', ventas.editarventa);
router.post('/offventa/:p1', ventas.offventa);
router.post('/onventa/:p1', ventas.onventa);



module.exports = router;