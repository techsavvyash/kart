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
    reviews: Array,

},{
    collection: "products", 
});

ProductSchema.methods.updateQty = async function(action){
    if(action==="increase") this.qty = this.qty + 1;
    else if(action==="decrease") this.qty = this.qty - 1;
    await this.save();
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