const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const UsersContoller = require("./Controllers/UsersController")
const experience = require("./Controllers/experience")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
db();


// routing 
app.get("/", (req, res) => {
    res.json({ Hello: "World" });
  });
  // create new user
app.post("/signup", UsersContoller.signup);
// log in for user experience
app.post("/login", UsersContoller.login);
//log out from the session
app.get("/logout", UsersContoller.logout)
// post new experience
app.post("/share", experience.shareExperience)
// delete a post
app.delete("/delete/:id", experience.deleteExp)
// get all post 
app.get("/getAll", experience.getAllExperience);


app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
