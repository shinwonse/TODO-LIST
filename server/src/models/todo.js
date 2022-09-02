const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    require: true,
  },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
