import express from 'express';
import adquisicion from '../controllers/adq';

const router = express.Router();

router.get('/listarcotizaciondeadquisicion',adquisicion.listarcotizacionadquisicion);
router.get('/listarcotizaciondeadquisicionactiva',adquisicion.listarcotizacionadquisicionActiva);
router.get('/listarcotizaciondeadquisicioninactiva',adquisicion.listarCotizacionAdquisicionAnulada);

router.get('/agregarcotizacionadquisicion',adquisicion.agregarcotizacionadquisicion);
router.get('/actualizarcotizacionadquisicion',adquisicion.actualizarcotizacionadquisicion);
router.get('/eliminarcotizacionadquisicion',adquisicion.eliminarcotizacionadquisicion);



router.get('/listarcotizacionitem',adquisicion.listarcotizacionitem);
router.get('/listarcotizacionitemactiva',adquisicion.listarCotizacionItemActiva);
router.get('/listarcotizacioniteminactiva',adquisicion.listarCotizacionItemAnulada);
cotizacionitem
router.get('/agregarcotizacionitem',adquisicion.agregarcotizacionitem);
router.get('/actualizarcotizacionitem',adquisicion.actualizarcotizacionitem);
router.get('/eliminarcotizacionitem',adquisicion.eliminarcotizacionitem);

module.exports = router;