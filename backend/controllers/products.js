const Product = require("../models/Product");

exports.addProduct = async (req, res, next) => {
    const {name, price, audience, qty, description} = req.body;
    try{
        const newProduct = await Product.create({name, price, audience, qty, description});
        res.send({success: true, message: "Product Added successfully" , product: newProduct});
    } catch(err){
        res.send(err);
    }
}

exports.readNormalProducts = async (req, res, next)=>{
    try{
        const products = await Product.find({audience: "normal"});
        res.send(products);
    } catch(err){
        res.send(err);
    }
}

exports.readVIPProducts = async (req, res, next)=>{
    try{
        const products = await Product.find({audience: "VIP"});
        res.send(products);
    } catch(err){
        res.send(err);
    }
}

