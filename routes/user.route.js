const express = require("express");
const route = express.Router();
const Users = require("../model/user.model");
const multer = require("multer");
require("../config/user.db.js");

route.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

route.get("/register", (req, res) => {
  res.render("register");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

route.post("/register", upload.single("avatar"), async (req, res, next) => {
  try {
    const users = new Users({
      name: req.body.name,
      image: req.file.filename,
    });
    await users.save();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

module.exports = route;
