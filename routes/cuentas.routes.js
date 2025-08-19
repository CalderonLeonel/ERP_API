import express from "express";
import cuentas from '../controllers/cli';

const router = express.Router();

router.get('/listarcuentas', cuentas.listarcuentas);
router.get('/listarcuentasinh', cuentas.listarcuentasinh);
router.post('/addcuenta/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', cuentas.addcuenta);
router.post('/updcuenta/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', cuentas.updcuenta);
router.post('/offcuenta/:p1', cuentas.offcuenta);
router.post('/oncuenta/:p1', cuentas.oncuenta);



module.exports = router;