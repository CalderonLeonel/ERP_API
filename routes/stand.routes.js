import express from 'express';
import stand from '../controllers/std';

const router = express.Router();

router.get('/listarstands',stand.listarStands);
router.get('/listarstandsactivos',stand.listarStandsActivos);
router.get('/listarstandsinactivos',stand.listarStandsInactivos);
router.post('/agregarstand/:p1,:p2,:p3',stand.agregarStand);
router.post('/actualizarstand/:p1,:p2,:p3,:p4',stand.actualizarStand);
router.post('/eliminarstand/:p1',stand.eliminarStand);


module.exports = router;