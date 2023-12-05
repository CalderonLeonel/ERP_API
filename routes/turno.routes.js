import express from "express";
import turnos from '../controllers/turn';

const router = express.Router();


router.get('/listarturnos', turnos.listarturnos);
router.get('/listarturnossins/:p1', turnos.listarturnossins);
router.get('/listarturnoscons/:p1', turnos.listarturnoscons);
router.post('/addturno/:p1', turnos.addturno);
router.post('/editarturno/:p1,:p2', turnos.editturno);
router.post('/onturno/:p1', turnos.onturno);
router.post('/offturno/:p1', turnos.offturno);
router.post('/removerturnodesector/:p1,:p2', turnos.removerturnodesector);

module.exports = router;