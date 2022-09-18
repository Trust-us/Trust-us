const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const UsersContoller = require("./Controllers/UsersController")
const experience = require("./Controllers/experience")
const requireAuth = require ("./middle/requireAuth")

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
//check if user is logged in
<<<<<<< HEAD
app.get("/checkAuth", UsersContoller.checkAuth);
=======
app.get("/checkAuth",   UsersContoller.checkAuth);
>>>>>>> db85f45ddd97b6c88f3c2b974e281aa103f7b7f7
// share a new Post experience
app.post("/share", experience.shareExperience)
// delete a post
app.delete("/delete/:id", experience.deleteExp)
// get all post 
<<<<<<< HEAD
app.get("/getAll", experience.getAllExperience);
//update the post shared
app.put("/put/:id", experience.updateExp);
=======
app.get("/getAll",  experience.getAllExperience);
//update the post shared
app.put("/put/:id",  experience.updateExp);
>>>>>>> db85f45ddd97b6c88f3c2b974e281aa103f7b7f7
//filtering postes by categories and locations
app.post("/search",  experience.filter);
// get one post 
app.get("/getone/:id",  experience.getone);



app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
