import express from 'express';
import productos from '../controllers/prod';

const router = express.Router();


router.get('/listarproductos', productos.listarproductos);
router.get('/listarproductosinh', productos.listarproductosinh);
router.post('/addproducto/:p1,:p2,:p3,:p4,:p5', productos.addproducto);
router.post('/updproducto/:p1,:p2,:p3', productos.updproducto);
router.post('/offproducto/:p1', productos.offproducto);
router.post('/onproducto/:p1', productos.onproducto);

module.exports = router;