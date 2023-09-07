import express from "express";
import usuarios from '../controllers/usua';

const router = express.Router();

router.get('/listusuario', usuarios.listusuario);
module.exports = router;