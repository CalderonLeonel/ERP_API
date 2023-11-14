import express from "express";
import empleados from '../controllers/empl';

const router = express.Router();

router.get('/listarempleados',empleados.listarempleados);
router.get('/listarempleadossinc',empleados.listarempleadossinc);
router.post('/addempleado/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9', empleados.addempleado);
router.post('/editarempleado/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10', empleados.editarempleado);
router.post('/offempleado/:p1', empleados.offempleado);
router.post('/onempleado/:p1', empleados.onempleado)
router.get('/getempleado/:p1', empleados.getempleado);

module.exports = router;