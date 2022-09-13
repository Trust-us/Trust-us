const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
  },
 
);
const User = mongoose.model("User", userSchema);
module.exports = User;
