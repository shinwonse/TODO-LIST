const express = require('express');
const router = express.Router();
const Redirect = require('../controller/redirectController');

router.get('/', Redirect.redirectHome);

router.get('/login', Redirect.redirectLogin);

module.exports = router;
