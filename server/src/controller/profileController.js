const { User } = require('../models/user');

exports.getProfile = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
