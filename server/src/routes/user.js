const express = require('express');
const router = express.Router();
const User = require('../controller/userController');

// Get all Users
router.get('/', User.findAll);

// Get one User
router.get('/:id', User.findUser);

// Add User's toDo
// router.post('/:id/:toDo', User.addToDo);

module.exports = router;
