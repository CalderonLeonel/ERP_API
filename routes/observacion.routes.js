import express from "express";
import observaciones from '../controllers/obs';

const router = express.Router();


router.get('/listarobservaciones/:p1', observaciones.listarobservaciones);
router.post('/addobservacion/:p1,:p2,:p3,:p4', observaciones.addobservacion);
router.post('/editarobservacion/:p1,:p2,:p3,:p4', observaciones.editarobservacion);
router.post('/offobservacion/:p1', observaciones.offobservacion);
router.post('/onobservacion/:p1', observaciones.onobservacion)


module.exports = router;