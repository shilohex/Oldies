const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { email, password, fullName, username } = req.body;

  if (!email || !password || !fullName || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    // console.log(User);

    if (existingUser) {
      return res.status(401).json({ error: "Email already in use" });
    }

    const newUser = await User.create({
      fullName: fullName,
      username: username,
      password: password,
      email: email,
    });

    if (newUser) {
      console.log(newUser);
      return res.status(201).json({ message: "User successfully created" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const authUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ error: "All fields are required" });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).send({ error: "Invalid username" });
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).send({ error: "Invalid password" });
  }
  res
    .status(200)
    .send({ message: "User authenticated sucessfully", user: user });
};

module.exports = { registerUser, authUser };
