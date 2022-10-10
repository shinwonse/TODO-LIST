const express = require("express");
const router = express.Router();
const OauthController = require("../controller/oauthController.js");

router.get("/authCode", OauthController.getAuthCode);

router.get("/token", OauthController.postToken);

router.get("/redirect", OauthController.redirect);

module.exports = router;
