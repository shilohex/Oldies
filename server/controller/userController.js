const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { email, password, fullName, username } = req.body;

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
    });

    if (newUser) {
      return res.status(201).json({ message: "User successfully created" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// const bcrypt = require("bcrypt");

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Here, you might generate a token for authentication

    res.json({ user, token: "your_generated_token" });
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// const registerUser = async (req, res) => {
//   const { username, password, email, phoneNumber, address } = req.body;
//   const newUser = new User({
//     username: username,
//     password: password,
//     email: email,
//     phoneNumber: phoneNumber,
//     address: address,
//   });

//   const user = await newUser.save();
//   res.send(user);
// };

// const authUser = async (req, res) => {
//   const { username, password } = req.body;
//   console.log(req.body);
//   const newUser = new User({
//     username: username,
//     password: password,
//   });

//   const user = await newUser.save();
//   res.send(user);
// };

module.exports = { registerUser, authUser };
