import express from "express";
import departamentos from '../controllers/dep';

const router = express.Router();


router.get('/listardepartamentos', departamentos.listardepartamentos);
router.post('/adddepartamento/:p1,:p2,:p3', departamentos.adddepartamento);
router.post('/editardepartamento/:p1,:p2,:p3,:p4', departamentos.editardepartamento);
router.post('/offdepartamento/:p1', departamentos.offdepartamento);
router.post('/ondepartamento/:p1', departamentos.ondepartamento)


module.exports = router;
