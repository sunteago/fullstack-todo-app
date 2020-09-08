const express = require("express");
const { login, signUp } = require("../controllers/userController");
const { authenticate } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login, authenticate);

router.post("/signup", signUp, authenticate);

module.exports = router;
