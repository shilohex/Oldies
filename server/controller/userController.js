const User = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { email, password, fullName, username } = req.body;

  if (!email || !password || !fullName || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ error: "Email already in use" });
    }

    const newUser = await User.create({
      fullName: fullName,
      username: username,
      password: password,
      email: email,
      accountType: "buyer",
    });

    if (newUser) {
      return res.status(201).json({ ...newUser, password: undefined });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "All fields are required" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).send({ error: "Invalid email" });
  }

  const isMatch = await user.matchPassword(password);
  user.password = undefined;

  if (!isMatch) {
    return res.status(401).send({ error: "Invalid password" });
  }
  res.status(200).send({
    message: "User authenticated sucessfully",
    token: generateToken({
      id: user._id,
      email: user.email,
    }),
    user,
  });
};

module.exports = { registerUser, authUser };
