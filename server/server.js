const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    origin: true,
    credentials: true,
  }
));

db();

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
