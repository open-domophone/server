'use strict';
const express = require('express');
const router = express.Router();

const views = require('./views')

router.get('/login/', views.login);
//router.status('/login/', views.status);

module.exports = router;