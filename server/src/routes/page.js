const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.send('로그인돼있음');
  } else {
    res.send('로그인안돼있음');
  }
});

module.exports = router;
