const express = require("express");
const router = express.Router();

//const addProduct = require("../controllers/products").addProduct;
const readNormalProducts = require("../controllers/products").readNormalProducts;
const readVIPProducts = require("../controllers/products").readVIPProducts;
const buyNow = require("../controllers/products").buyNow;
const checkout = require("../controllers/products").checkout;
const addToList = require("../controllers/products").addToList;
const readList = require("../controllers/products").readlist;
const addReview = require("../controllers/products").review;
const getInfo = require("../controllers/products").getInfo;
const verifySignature = require("../controllers/products").verifySignature ;
 
router.route("/products").get(readNormalProducts);
router.route("/vip").get(readVIPProducts);
router.route("/list").get(readList);
router.route("/list").post(addToList);
router.route("/buynow").post(buyNow);
router.route("/checkout").post(checkout);
router.route("/addReview").post(addReview);
router.route("/getInfo/:prodId").put(getInfo);
router.route("/verify").post(verifySignature);

module.exports = router;