import express from "express";
import sectores from '../controllers/sect';

const router = express.Router();


router.get('/listarsectores', sectores.listarsectores);
router.post('/addsector/:p1,:p2', sectores.addsector);
router.post('/asignarturnoasector/:p1,:p2', sectores.asignarturnoasector);
router.post('/editarsector/:p1,:p2,:p3', sectores.editarsector);
router.post('/offsector/:p1', sectores.offsector);
router.post('/onsector/:p1', sectores.onsector)


module.exports = router;