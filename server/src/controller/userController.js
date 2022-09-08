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
  User.findOne({ nickname: req.params.nickname })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.addToDo = (req, res) => {
  User.updateOne(
    { nickname: req.params.nickname },
    { $push: { toDos: { text: req.params.toDo } } }
  ).then((data) => res.send(data));
};
