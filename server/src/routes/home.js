const express = require('express');
const router = express.Router();
const Home = require('../controller/homeController');

router.get('/', Home.test);

module.exports = router;
