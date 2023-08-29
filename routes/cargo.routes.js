import express from "express";
import cargos from '../controllers/carg';

const router = express.Router();


router.get('/listarcargo', cargos.listcargo);
router.post('/addcargo/:p1,:p2', cargos.addcargo);
router.post('/editcargo/:p1,:p2,:p3', cargos.editcargo);
router.post('/deletecargo/:p1', cargos.deletecargo);
router.get('/getcargo/:p1', cargos.getcargo);

module.exports = router;