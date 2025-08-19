import express from "express";
import materias from '../controllers/mat';

const router = express.Router();

router.get('/listarmateriasp', materias.listarmateriasp);
router.get('/listarmateriaspinh', materias.listarmateriaspinh);
router.post('/addmateria/:p1,:p2,:p3,:p4,:p5', materias.addmateria);
router.post('/updmateria/:p1,:p2,:p3,:p4,:p5,:p6', materias.updmateria);
router.post('/offmateria/:p1', materias.offmateria);
router.post('/onmateria/:p1', materias.onmateria);

router.post('/addusomateriaprima/:p1,:p2,:p3,:p4', materias.addusomateriaprima);



module.exports = router;