import express from 'express';
import stand from '../controllers/std';

const router = express.Router();

router.get('/listarstands',stand.listarStands);

module.exports = router;