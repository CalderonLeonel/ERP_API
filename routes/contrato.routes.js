import express from "express";
import contratos from '../controllers/cont';

const router = express.Router();


router.get('/listarcontratos/:p1', contratos.listarcontratos);
router.post('/addcontrato/:p1,:p2,:p3,:p4', contratos.addcontrato);
router.post('/editarcontrato/:p1,:p2,:p3,:p4', contratos.editarcontrato);
router.post('/offcontrato/:p1', contratos.offcontrato);
router.post('/oncontrato/:p1', contratos.oncontrato)


module.exports = router;