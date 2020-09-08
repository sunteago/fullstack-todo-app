const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "You have to provide email and password" });
  }

  let user;

  try {
    user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "There was a problem" });
  }

  const isEqual = await bcrypt.compare(password, user.password);

  if (!isEqual) {
    return res.status(403).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      email: user.email,
      uuid: user.uuid,
    },
    process.env.JWT_SECRET
  );

  res.status(200).json({ msg: "Log in success", data: token });
};

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Empty fields are not allowed" });
  }

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(403).json({ msg: "Email is already in use" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "There was an error" });
  }

  const hashedPw = await bcrypt.hash(password, 12);
  const newUser = {
    email,
    password: hashedPw,
    uuid: uuidv4(),
  };

  try {
    const createdUser = await User.create(newUser);

    return res.status(201).json({ msg: "User Created", data: createdUser });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "There was a problem creating user, please try again" });
  }
};
