import express from "express";
import vacaciones from '../controllers/vaca';

const router = express.Router();

router.get('/listarvacaciones/:p1', vacaciones.listarvacaciones);
router.post('/addvacacion/:p1,:p2,:p3,:p4', vacaciones.addvacacion);
router.post('/editarvacacion/:p1,:p2,:p3,:p4', vacaciones.editarvacacion);
router.post('/offvacacion/:p1', vacaciones.offvacacion);
router.post('/onvacacion/:p1', vacaciones.onvacacion)

module.exports = router;