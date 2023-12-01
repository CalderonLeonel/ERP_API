import express from "express";
import solicitudes from '../controllers/soli';

const router = express.Router();


router.get('/listarsolicitudes', solicitudes.listarsolicitudes);
router.post('/addsolicitud/:p1,:p2,:p3', solicitudes.addsolicitud);
router.post('/editarsolicitud/:p1,:p2,:p3', solicitudes.editarsolicitud);
router.post('/offsolicitud/:p1', solicitudes.offsolicitud);
router.post('/onsolicitud/:p1', solicitudes.onsolicitud)


module.exports = router;