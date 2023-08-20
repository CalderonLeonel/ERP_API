import express from 'express';
import authentication from '../controllers/auth';
//const express = require('express');
//const authentication = require('../controllers/auth');

const router = express.Router();

//router.post(post);

router.get("/",authentication.signUp);
router.post("/signin",authentication.signIn);
//router.post("/signin",authentication.signIn);

module.exports = router ;
//module.export = router;