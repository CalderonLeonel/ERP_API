import express from 'express';
import adquisicion from '../controllers/adq';

const router = express.Router();

router.get('/listarcotizaciondeadquisicion',adquisicion.listarcotizaciondeadquisicion);
router.get('/listarcotizacionitem',adquisicion.listarcotizacionitem);

module.exports = router;