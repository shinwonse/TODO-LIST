const express = require('express');
const router = express.Router();
const User = require('../controller/userController');

// Get all Users
router.get('/getUsers', User.findAll);

module.exports = router;
