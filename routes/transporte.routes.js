import express from "express";
import transportes from '../controllers/tran';

const router = express.Router();

router.get('/listartransportes', transportes.listartransportes);
router.get('/listartransportesinh', transportes.listartransportesinh);
router.post('/addchofer/:p1,:p2,:p3,:p4,:p5,:p6,:p7,:p8,:p9,:p10,:p11', transportes.addchofer);
router.post('/updchofer/:p1,:p2,:p3,:p4,:p5,:p6', transportes.updchofer);
router.post('/offtransporte/:p1', transportes.offchofer);
router.post('/ontransporte/:p1', transportes.onchofer);

router.post('/addcarro/:p1,:p2,:p3,:p4')

router.post('/actChoferImg/:p1',transportes.actChoferImg);
router.post('/updFotoUrl/:p1',transportes.updFotoUrl);



module.exports = router;