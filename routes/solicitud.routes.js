import express from "express";
import solicitudes from '../controllers/soli';

const router = express.Router();

router.get('/listarsolicitudes', solicitudes.listarsolicitudes);
router.post('/addsolicitud/:p1,:p2,:p3', solicitudes.addsolicitud);
router.post('/editarsolicitud/:p1,:p2,:p3', solicitudes.editarsolicitud);
router.post('/denysolicitud/:p1', solicitudes.denysolicitud);
router.post('/acceptsolicitud/:p1', solicitudes.acceptsolicitud);
router.post('/deletesolicitud/:p1', solicitudes.deletesolicitud)

module.exports = router;