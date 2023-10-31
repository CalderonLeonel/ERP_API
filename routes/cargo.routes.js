import express from "express";
import cargos from '../controllers/carg';

const router = express.Router();


router.get('/listarcargos', cargos.listarcargos);
router.post('/addcargo/:p1,:p2,:p3', cargos.addcargo);
router.post('/actcargo/:p1,:p2,:p3', cargos.editcargo);
router.post('/deletecargo/:p1', cargos.deletecargo);
router.get('/getcargo/:p1', cargos.getcargo);
router.post('/offcargo/:p1', cargos.offcargo);
router.post('/oncargo/:p1', cargos.oncargo)


module.exports = router;