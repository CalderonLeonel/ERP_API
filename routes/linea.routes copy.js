import express from "express";
import materias from '../controllers/mat';

const router = express.Router();

router.get('/listarmaterias', materias.listarmaterias);
router.get('/listarmateriasinh', materias.listarmateriasinh);
router.post('/addmateria/:p1,:p2', materias.addmateria);
router.post('/updmateria/:p1,:p2,:p3', materias.updmateria);
router.post('/offmateria/:p1', materias.offmateria);
router.post('/onmateria/:p1', materias.onmateria);



module.exports = router;