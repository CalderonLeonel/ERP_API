import express from "express";
import departamentos from '../controllers/depa';

const router = express.Router();

router.get('/listardepartamentos', departamentos.listardepartamentos);
router.get('/listardepartamentosinh', departamentos.listardepartamentosinh);
router.post('/adddepartamento/:p1,:p2', departamentos.adddepartamento);
router.post('/upddepartamento/:p1,:p2,:p3', departamentos.upddepartamento);
router.post('/offdepartamento/:p1', departamentos.offdepartamento);
router.post('/ondepartamento/:p1', departamentos.ondepartamento);

router.post('/addfinanciamiento/:p1,:p2,:p3', departamentos.addfinanciamiento);
router.get('/listarfinanciamientos', departamentos.listarfinanciamientos);





module.exports = router;