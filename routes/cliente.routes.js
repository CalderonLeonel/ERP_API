import express from "express";
import clientes from '../controllers/cli';

const router = express.Router();

router.get('/listarclientes', clientes.listarclientes);
router.get('/listarclientesinh', clientes.listarclientesinh);
router.post('/addcliente/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', clientes.addcliente);
router.post('/updcliente/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8', clientes.updcliente);
router.post('/offcliente/:p1', clientes.offcliente);
router.post('/oncliente/:p1', clientes.oncliente);



module.exports = router;