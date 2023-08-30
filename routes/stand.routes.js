import express from 'express';
import stand from '../controllers/std';

const router = express.Router();

router.get('/listarstands',stand.listarStands);
router.get('/listarstandsactivos',stand.listarStandsActivos);
router.get('/listarstandsinactivos',stand.listarStandsInactivos);
router.get('/agregarstand',stand.agregarStand);
router.get('/actualizarstand',stand.actualizarStand);
router.get('/eliminarstand',stand.eliminarStand);


module.exports = router;