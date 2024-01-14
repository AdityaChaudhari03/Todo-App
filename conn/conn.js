const mongoose = require("mongoose");
require('dotenv').config();

const conn = async () => {
  try {
    await mongoose
      .connect(
        process.env.DB_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Connected to MongoDB successfully!");
      });
  } catch (error) {
    console.log(error);
  }
};

// Call the conn function
// conn();
module.exports = conn;


