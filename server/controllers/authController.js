const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = jwt.sign(
    {
      user: {
        email: req.user.email,
        uuid: req.user.uuid,
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return res.status(200).json({ msg: "User Authenticated", data: token });
};
