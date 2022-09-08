const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
  },
  toDos: [
    {
      text: String,
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
