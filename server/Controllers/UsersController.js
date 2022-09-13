const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

async function signup(req, res) {
  console.log("req---->", req.body);
  try {
    const { username, email, password } = await req.body;
    const salt = await bcrypt.genSaltSync(10);
    console.log("salt---->", salt);

    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      username: username,
      email: email,
      password: hash,
    });
    console.log("user--->", user);
    res.status(201).json("user created");
  } catch (err) {
    console.log(err);
    res.status(400).json("error");
  }
}

module.exports = {
  signup,
};
