// requires
const express = require("express");
const route = express.Router();
const multer = require("multer");
const {
  createUser,
  userRegister,
  getAllUsers,
} = require("../controller/user.controller.js");
require("../config/user.db.js");

// get users
route.get("/users", getAllUsers);

// register users
route.get("/register", userRegister);

// multer
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

// create users
route.post("/register", upload.single("avatar"), createUser);

module.exports = route;
