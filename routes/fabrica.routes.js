import express from "express";
import fabricas from "../controllers/fab";

const router = express.Router();

router.get("/listarfabricas", fabricas.listarfabricas);
router.get("/listarfabricasinh", fabricas.listarfabricasinh);
router.post("/addfabrica/:p1,:p2,:p3,:p4,:p5", fabricas.addfabrica);
router.post("/updfabrica/:p1,:p2,:p3,:p4,:p5,:p6", fabricas.updfabrica);
router.post("/offfabrica/:p1", fabricas.offfabrica);
router.post("/onfabrica/:p1", fabricas.onfabrica);

module.exports = router;
