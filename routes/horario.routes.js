import express from "express";
import horarios from '../controllers/hor';

const router = express.Router();

router.get('/listarhorarios/:p1', horarios.listarhorarios);
router.post('/addhorario/:p1,:p2,:p3,:p4,:p5', horarios.addhorario);
router.post('/editarhorario/:p1,:p2,:p3,:p4,:p5', horarios.editarhorario);
router.post('/deletehorario/:p1', horarios.deletehorario);
//router.post('/offhorario/:p1', horarios.offhorario);
//router.post('/removerhorariodesector/:p1,:p2', horarios.removerhorariodesector);

module.exports = router;