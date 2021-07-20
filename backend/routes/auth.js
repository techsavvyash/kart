const express = require("express");
const router = express.Router();

const login = require("../controllers/auth").login;
const signup = require("../controllers/auth").signup;
const logout = require("../controllers/auth").logout;
const resetPwd = require("../controllers/auth").resetPwd;
const forgotPwd = require("../controllers/auth").forgotPwd;

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/logout").post(logout);
router.route("/forgotpwd").post(forgotPwd);
router.route("/resetPwd/:resetToken").put(resetPwd);

module.exports = router;