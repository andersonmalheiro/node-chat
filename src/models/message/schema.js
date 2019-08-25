const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Schema de mensagem
const schema = new Schema(
  {
    text: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
      required: [false],
    },
    user: {
      type: ObjectId,
      ref: 'User',
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { schema };
