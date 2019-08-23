const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema de usuário
const schema = new Schema(
  {
    name: {
      type: String,
      required: [true]
    },
    avatar: {
      type: String,
      required: [false]
    },
    password: {
      type: String,
      required: [true]
    }
  },
  {
    timestamps: true
  }
);

module.exports = { schema };
