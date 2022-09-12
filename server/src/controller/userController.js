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

exports.findUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate('toDos')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
