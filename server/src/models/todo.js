const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("ToDo", TodoSchema);

module.exports = { Todo };
