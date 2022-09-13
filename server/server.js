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
  
app.post("/signup", UsersContoller.signup);
app.post("/login", UsersContoller.login);
app.get("/logout", UsersContoller.logout)
app.post("/share", experience.shareExperience)
app.post("/delete/:id", experience.deleteExp)

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
