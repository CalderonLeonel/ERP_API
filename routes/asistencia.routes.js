import express from "express";
import asistencias from '../controllers/asis';

const router = express.Router();


router.get('/listarasistenciasdeldia', asistencias.listarasistenciasdeldia);
router.post('/addasistencia/:p1', asistencias.addasistencia);
//router.post('/editarasistencia/:p1,:p2,:p3,:p4', asistencias.editarasistencia);
//router.post('/deleteasistencia/:p1', asistencias.deleteasistencia);
//router.get('/getasistencia/:p1', asistencias.getasistencia);
//router.post('/offasistencia/:p1', asistencias.offasistencia);
//router.post('/onasistencia/:p1', asistencias.onasistencia)


module.exports = router;