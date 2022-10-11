const { User } = require('../models/user');

exports.findAll = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie('auth');
    if (err) return err;
    res.end();
  });
};
