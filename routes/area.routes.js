import express from "express";
import areas from '../controllers/area';

const router = express.Router();


router.get('/listarareas', areas.listarareas);
router.post('/addarea/:p1', areas.addarea);
router.post('/editararea/:p1,:p2', areas.editararea);
router.post('/offarea/:p1', areas.offarea);
router.post('/onarea/:p1', areas.onarea)


module.exports = router;