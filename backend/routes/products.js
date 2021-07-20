const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/products").addProduct;
const readNormalProducts = require("../controllers/products").readNormalProducts;
const readVIPProducts = require("../controllers/products").readVIPProducts;

router.route("/products").get(readNormalProducts);
router.route("/products").post(addProduct);
router.route("/vip").get(readVIPProducts);

module.exports = router;
