const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/trust-us", () =>
      console.log("MongoDB connected")
    );
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectDB;