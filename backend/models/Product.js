const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Product Name is required"],
        maxlength: 25,
    },
    price:{
        type: Number,
        required: [true, "Product Price is required"],
    },
    audience:{
        type: String,
        required: [true, "Specify the product's audience"],
    },
    description: String,
    reviews: Array,
},{
    collection: "products", 
});


const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;