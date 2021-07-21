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
    description: {
        type: String,
        required: [true, "Provide a description for the product"],
    },
    qty: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    reviews: Array,

},{
    collection: "products", 
});

ProductSchema.methods.updateQty = function(action, nums){
    if(action==="increase") this.qty = this.qty + nums;
    else if(action==="decrease") this.qty = this.qty - nums;
}

ProductSchema.methods.addReview = async function(data){
    this.reviews.push({
        customer: data.name,
        message: data.text
    });
    this.save();
}

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;