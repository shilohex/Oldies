const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { username, password, email, phoneNumber, address } = req.body;
  const newUser = new User({
    username: username,
    password: password,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
  });

  const user = await newUser.save();
  res.send(user);
};
const authUser = async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({
    username: username,
    password: password,
  });

  const user = await newUser.save();
  res.send(user);
};

module.exports = { registerUser, authUser };
