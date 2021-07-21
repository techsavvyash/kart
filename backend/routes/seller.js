const express = require("express");
const router = express.Router();

const login = require("../controllers/auth").sellerLogin;
const addProduct = require("../controllers/products").addProduct;

router.route("/login").post(login);
router.route("/products").post(addProduct);


module.exports = router;