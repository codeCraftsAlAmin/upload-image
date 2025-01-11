const Users = require("../model/user.model");

// create users
const createUser = async (req, res, next) => {
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
};

// register user
const userRegister = (req, res) => {
  res.render("register");
};

// get users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = { createUser, userRegister, getAllUsers };
