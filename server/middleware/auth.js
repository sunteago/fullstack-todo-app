const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ msg: "No token, no permission granted" });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token, no permission granted" });
  }
  try {
    const crypted = jwt.verify(token, process.env.JWT_SECRET);
    req.user = crypted.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
