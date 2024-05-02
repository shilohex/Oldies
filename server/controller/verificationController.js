const verification = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ error: "All fields are required" });
  }
  res.status(200).send({
    message: " email verified",
    token: generateToken({
      email: user.email,
    }),
  });
};

module.exports = { verification };
