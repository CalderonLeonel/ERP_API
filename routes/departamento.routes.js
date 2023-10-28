import express from "express";
import departamentos from "../controllers/dep";

const router = express.Router();

router.get("/listardepartamentos/", departamentos.listardepartamentos);

module.exports = router;
