// requires
const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/user.route");
const cors = require("cors");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

// base routes
app.get("/", (req, res) => {
  res.render("index");
});

// // handle router errors
// app.use((req, res, next) => {
//   res.status(404).send("router not found");
// });

// // handle server error
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send("server is broken");
// });
module.exports = app;
