import express from "express";
import turnos from '../controllers/turn';

const router = express.Router();


router.get('/listarturnos', turnos.listarturnos);
router.post('/addturno/:p1,:p2,:p3', turnos.addturno);
router.post('/actturno/:p1,:p2,:p3', turnos.editturno);
router.post('/deleteturno/:p1', turnos.deleteturno);
router.get('/getturno/:p1', turnos.getturno);

module.exports = router;