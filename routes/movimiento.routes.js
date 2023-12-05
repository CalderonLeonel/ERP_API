import express from "express";
import movimientos from '../controllers/mov';

const router = express.Router();

router.get('/listarmovimientos', movimientos.listarmovimientos);
router.get('/listarmovimientosinh', movimientos.listarmovimientosinh);
router.post('/addmovimiento/:p1,:p2,:p3,:p4,:p5', movimientos.addmovimiento);
router.post('/updmovimiento/:p1,:p2,:p3,:p4,:p5,:p6', movimientos.updmovimiento);
router.post('/offmovimiento/:p1', movimientos.offmovimiento);
router.post('/onmovimiento/:p1', movimientos.onmovimiento);



module.exports = router;