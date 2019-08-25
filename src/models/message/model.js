const mongoose = require("mongoose");
const { schema } = require("./schema");

schema.pre("save", () => {
  // logic here
});

const Message = mongoose.model("Message", schema);
module.exports = Message;
