import express from "express";
import ventas from '../controllers/ven';

const router = express.Router();

router.get('/listarventas', ventas.listarventas);
router.get('/listardetalle/:p1', ventas.listardetalle);
router.get('/listarventasinh', ventas.listarventasinh);
router.get('/ultimaventa', ventas.ultimaventa);
router.post('/addventa/:p1,:p2,:p3,:p4,:p5,:p6', ventas.addventa);
router.post('/addventacarrito/', ventas.addventacarrito);
router.post('/editarventa/:p1,:p2,:p3', ventas.editarventa);
router.post('/offventa/:p1', ventas.offventa);
router.post('/onventa/:p1', ventas.onventa);



module.exports = router;
