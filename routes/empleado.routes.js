import express from "express";
import empleados from '../controllers/empl';

const router = express.Router();

//router.post('/addempleado',empleados.addempleado);
router.get('/listallempleados',empleados.listallempleados);
module.exports = router;