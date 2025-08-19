import express from "express";
import auth from '../controllers/auth';

const router = express.Router();

router.post('/signin', auth.signin);




module.exports = router;
