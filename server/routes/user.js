const express = require("express");
const auth = require("../middleware/auth");
const { login, signUp } = require("../controllers/userController");
const { authenticate, getUserData } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login, authenticate);

router.post("/signup", signUp, authenticate);

router.get("/auth", auth, getUserData);

module.exports = router;
