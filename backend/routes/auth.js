const express = require("express");
const router = express.Router();

const login = require("../controllers/auth").login;
const signup = require("../controllers/auth").signup;

router.route("/login").post(login);
router.route("/signup").post(signup);

module.exports = router;