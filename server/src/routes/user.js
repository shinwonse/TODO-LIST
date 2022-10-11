const express = require("express");
const router = express.Router();
const User = require("../controller/userController");

router.get("/", User.findAll);
router.delete("/", User.logout);

module.exports = router;
