import express from "express";
import acces from '../controllers/acc';

const router = express.Router();

router.get('/listaraccesos', acces.listaraccesos);

module.exports = router;