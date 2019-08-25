const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema de usuário
const schema = new Schema(
  {
    username: {
      type: String,
      unique: true,
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
