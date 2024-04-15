const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting ${error.message}`);
    process.exit();
  }
};

module.exports = connectdb;
