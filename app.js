// requires
const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");
const cors = require("cors");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

// base routes
app.get("/", (req, res) => {
  res.render("index");
});

// handle router errors
app.use((req, res, next) => {
  res.status(404).send("router not found");
});

// handle server error
app.use((err, req, res, next) => {
  res.status(500).send("server is broken", err.message);
});
module.exports = app;
