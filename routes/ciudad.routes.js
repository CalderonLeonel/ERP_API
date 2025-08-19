import express from "express";
import ciudades from "../controllers/ciu";

const router = express.Router();

router.get("/listarciudades/:p1", ciudades.listarciudades);

module.exports = router;
