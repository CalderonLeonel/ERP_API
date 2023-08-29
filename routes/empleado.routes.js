import express from "express";
import empleados from '../controllers/empl';

const router = express.Router();

router.get('/listarempleado',empleados.listempleado);
router.post('/addempleado/:p1,:p2,:p3,:p4,:p5,:p6,:p7', empleados.addempleado);
router.post('/editempleado/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', empleados.editempleado);
router.get('/getempleado/:p1', empleados.getempleado);

module.exports = router;