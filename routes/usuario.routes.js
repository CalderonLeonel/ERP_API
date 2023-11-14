import express from "express";
import usuarios from '../controllers/usua';

const router = express.Router();

router.get('/listarusuarios', usuarios.listarusuarios);
router.post('/addusuario/:p1,:p2,:p3,:p4', usuarios.addusuario);
router.post('/editarusuario/:p1,:p2', usuarios.editarusuario);
router.post('/offusuario/:p1', usuarios.offusuario);
router.post('/onusuario/:p1', usuarios.onusuario)
module.exports = router;