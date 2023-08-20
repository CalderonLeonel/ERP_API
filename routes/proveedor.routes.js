import express from 'express';
import proveedor from '../controllers/prov';

const router = express.Router();

router.get('/listarproveedores',proveedor.listarproveedores);

module.exports = router;