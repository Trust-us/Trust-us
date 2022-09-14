const jwt = require("jsonwebtoken");
const User = require ("../Models/UserModel.js")
async function requireAuth(req,res,next) {
  try {
    const token = req.cookies.Authorization;
    const decoded = jwt.verify(token, "5d00a600l75y");
    const user = await User.findById(decoded.sub);
    if (Date.now() >= decoded.exp) {
      return res.status(401).json({ message: "Token expired" });
    } else if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
      next();
  } catch (error) {
    res.status(401).json({ message: "Token not found" });
  }
}
module.exports = requireAuth;
