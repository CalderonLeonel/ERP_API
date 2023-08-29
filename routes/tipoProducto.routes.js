import express from "express";
import tipos from '../controllers/tipo';

const router = express.Router();

router.get('/listartipos', tipos.listartipos);
router.get('/listartiposinh', tipos.listartiposinh);
router.post('/addtipo/:p1,:p2,:p3', tipos.addtipo);
router.post('/updtipo/:p1,:p2,:p3,:p4', tipos.updtipo);
router.post('/offtipo/:p1', tipos.offtipo);
router.post('/ontipo/:p1', tipos.ontipo);



module.exports = router;