const express = require('express');
const router = express.Router();
const User = require('../controller/userController');

// Get all Users
router.get('/', User.findAll);

// Get one User
router.get('/:nickname', User.findUser);

// Add User's toDo
router.post('/:nickname/:toDo', User.addToDo);

module.exports = router;
