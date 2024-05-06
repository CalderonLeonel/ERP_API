import express from 'express';
import adquisicion from '../controllers/adq';

const router = express.Router();

router.get('/listarcotizaciondeadquisicion',adquisicion.listarcotizacionadquisicion);
router.get('/listarcotizaciondeadquisicionactiva',adquisicion.listarCotizacionAdquisicionActiva);
router.get('/listarcotizaciondeadquisicionpendiente',adquisicion.listarCotizacionAdquisicionPendiente);
router.get('/listarcotizaciondeadquisicioninactiva',adquisicion.listarCotizacionAdquisicionAnulada);

router.post('/agregarcotizacionadquisicion/:p1,:p2,:p3,:p4,:p5',adquisicion.agregarcotizacionadquisicion);
router.post('/actualizarcotizacionadquisicion/:p1,:p2,:p3,:p4,:p5,:p6',adquisicion.actualizarcotizacionadquisicion);
router.post('/eliminarcotizacionadquisicion/:p1',adquisicion.eliminarcotizacionadquisicion);



router.get('/listarcotizacionitem',adquisicion.listarcotizacionitem);
router.get('/listarcotizacionitemactiva',adquisicion.listarCotizacionItemActivo);
router.get('/listarcotizacioniteminactiva',adquisicion.listarCotizacionItemAnulada);

router.get('/listardetallecotizacion/:p1',adquisicion.listarDetalleCotizacion);

router.get('/obtenerprecioanterior/:p1,:p2',adquisicion.getLastPrice);

router.post('/agregarcotizacionitem/:p1,:p2,:p3,:p4,:p5',adquisicion.agregarcotizacionitem);
router.post('/actualizarcotizacionitem/:p1,:p2,:p3,:p4,:p5,:p6',adquisicion.actualizarcotizacionitem);
router.post('/eliminarcotizacionitem/:p1',adquisicion.eliminarcotizacionitem);

module.exports = router;