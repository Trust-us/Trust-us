const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    user.save();
    res.status(201).json("user created");
  } catch (err) {
    console.log(err);
    res.status(400).json("alereaady exist");
  }
}

module.exports = {
  signup,
};
