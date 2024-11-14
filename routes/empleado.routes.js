import express from "express";
import empleados from '../controllers/empl';

const router = express.Router();

router.get('/listarempleados',empleados.listarempleados);
router.get('/listarempleadossinc',empleados.listarempleadossinc);
router.get('/listarempleadossactivos',empleados.listarempleadosactivos);
router.post('/addempleado/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10,:p11', empleados.addempleado);
router.post('/addempleadosinmaterno/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10', empleados.addempleadosinmaterno);
router.post('/editarempleado', empleados.editarempleado);
//router.post('/editarempleado/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10,:p11,:p12', empleados.editarempleado);
router.post('/offempleado/:p1', empleados.offempleado);
router.post('/onempleado/:p1', empleados.onempleado)
router.get('/getempleado/:p1', empleados.getempleado); //Se usa al leer QR

router.get('/listaralertas/', empleados.listaralertas);
router.post('/addalerta/', empleados.crearalertas);
router.post('/editaralerta/:p1,:p2,:p3', empleados.editaralertas)
router.post('/offalerta/:p1', empleados.offalerta);

router.post('/subirfoto', empleados.subirfoto);

router.get('/generarplanilla',empleados.generarPlanilla);

// Rutas para la gestión de pagos y planilla de empleados
router.post('/pagarplanilla/:p1/:p2', empleados.pagarplanilla);  // Pagar toda la planilla y reducir saldo en cuenta contable

// Rutas para pago individual de empleados
router.post('/addpago/:p1/:p2/:p3/:p4', empleados.addPago);  // Añadir un pago individual

// Otras rutas CRUD de pagos individuales
router.get('/pagos', empleados.listarPagos);  // Listar todos los pagos
router.post('/editpago/:p1', empleados.editarPago);  // Editar un pago específico
router.post('/deletepago/:p1', empleados.eliminarPago);  // Eliminar un pago específico



module.exports = router;