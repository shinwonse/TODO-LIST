const express = require('express');
const router = express.Router();
const Redirect = require('../controller/redirectController');

router.get('/', Redirect.redirectHome);

module.exports = router;
