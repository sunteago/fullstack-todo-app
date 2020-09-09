const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = jwt.sign(
    {
      user: {
        email: req.user.email,
        userId: req.user.id,
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return res
    .status(200)
    .json({ msg: "User Authenticated", token: token, email: req.user.email });
};

exports.getUserData = (req, res, next) => {
  const { email, userId } = req.user;
  if (!email || !userId) {
    return res.status(401).json({ msg: "Not allowed" });
  }

  return res.status(200).json({
    msg: "Succeed",
    email,
  });
};
