const mongoose = require("mongoose");
require("dotenv/config");

const connectDb = () => {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
  });
};

module.exports = { connectDb };
