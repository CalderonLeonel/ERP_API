import express from "express";
import paises from "../controllers/pai";

const router = express.Router();

router.get("/listarpaises/", paises.listarpaises);

module.exports = router;
