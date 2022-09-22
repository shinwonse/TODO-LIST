const express = require('express');
const router = express.Router();

// 여기서 login 여부에 따라 리다이렉트를 한다면 괜찮을까
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.send('로그인돼있음');
  } else {
    res.send('로그인안돼있음');
  }
});

module.exports = router;
