import express from "express";
import niveles from '../controllers/niv';

const router = express.Router();

router.post('/addnivel/:p1,:p2', niveles.addnivel);
module.exports = router;