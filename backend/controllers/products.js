const Product = require("../models/Product");
const User = require("../models/User");
const { sendEmail } = require("../utils/sendMail");

exports.addProduct = async (req, res, next) => {
    const {name, price, audience, qty, description, brand} = req.body;
    try{
        const newProduct = await Product.create({name, price, audience, qty, description, brand});
        res.send({success: true, message: "Product Added successfully" , product: newProduct});
    } catch(err){
        res.send({success: false, message: err});
    }
}

exports.readNormalProducts = async (req, res, next)=>{
    try{
        const products = await Product.find({audience: "normal"});
        res.send({success: true, message: products});
    } catch(err){
        res.send({success: false, message: err});
    }
}

exports.readVIPProducts = async (req, res, next)=>{
    try{
        const products = await Product.find({audience: "VIP"});
        res.send({success: true, message: products});
    } catch(err){
        res.send({success: false, message: err});
    }
}

exports.addToList = async (req, res, next)=>{
    if(req.session.userId){
        try{
            const data = req.body.data;
            for(item in data){
                const product = await Product.findOne({_id: data[item].id});
                if(product){
                    const user = await User.findOne({_id:req.session.userId});
                    const list = req.body.list;
                    if(list==="wishlist") user.wishlist.push(product);
                    else if(list==="cart") user.cart.push(product);
                    res.send({success: true, message: `Product has been added to your ${list}`});
                    await user.save();
                } else {
                    res.send({success: false, message:"Something went wrong"});
                }
            }
        } catch(err){
            res.send({success: false, message: err});
        }
    } else {
        res.send({success: false, message:"You need to login to perform this action"});
    }
}

exports.readlist = async(req, res, next)=>{
    if(req.session.userId){
        const user = await User.findOne({_id: req.session.userId});
        const list = req.query.list;
        if(list==="wishlist")
        res.send({success: true, message: user.wishlist});
        else if(list==="cart")
        res.send({success: true, message: user.cart});
    } else {
        res.send({success: false, message: "You need to login first"});
    }
}

exports.review = async ()=>{
    const product = await Product.findOne({_id: req.body.id});
    product.addReview({name: req.body.name, text: req.body.text});
}

// exports.addToCart = async (req, res, next)=>{
//     if(req.session.userId){
//         try{
//             const product = await Product.findOne({_id: req.body.id});
//             const user = await User.findOne({_id:req.session.userId});
//             user.cart.push(product);
//             res.send({success: true, message: "Product has been added to your cart"});
//             await user.save();
//         } catch(err){
//             res.send({success: false, message: err});
//         }
//     } else {
//         res.send({success: false, message:"You need to login to perform this action"});
//     }
// }

// exports.readCart = async(req, res, next)=>{
//     if(req.session.userId){
//         const user = User.findOne({_id: req.session.userId});
//         res.send({success: true, message: user.cart});
//     } else {
//         res.send({success: false, message: "You need to login first"});
//     }
// }

exports.checkout = async (req, res, next) => {
    try{
        const user = await  User.findOne({_id: req.session.userId}); 
        const cart = user.cart;
        let totalAmt = 0;
        let message = '';
        for(item in cart){
            totalAmt += ((cart[item].price)*(cart[item].qty));
            message += '<div>' + '<p>Product Name: ' + cart[product].name + '</p>' + '<p>Product Price: ₹' + cart[product].price + '</p>' + '<p>Product Quantity: ' + cart[product].qty + '</p>' + '</div>'
            const product = await Product.findOne({_id: cart[item]._id});
            product.updateQty("decrease", cart[item].qty);
        }
        const mailText = `<h3>Your Order Summary</h3>` + message + `<p>Total Amount = ${totalAmt}</p>`;
        await sendEmail({
            to: user.email,
            subject: "Order Summary",
            text: mailText,
        })
        res.send({success: true, message: "Your order has been placed and details have been emailed to your registered email account"});
        user.prevOrders.push({
            products: cart,
            date: Date.now(),
            amount: totalAmt
        })
        user.cart = [];
        await user.save();
    } catch(err){
        console.log(err);
        res.send({success: false, message: err});
    }
}

exports.buyNow = async (req, res, next)=>{
    if(!req.session.userId){
        res.send({success: false, message: "You need to login to buy the item"});
    } else {
        try{
            const user = await User.findOne({_id: req.session.userId});
            const product = await Product.findOne({_id: req.body.prodId});
            const totalAmt = (product.price)*(req.body.qty);
            const mailText = `<h3>Order Summary</h3>
            <p>Product Name: ${product.name}</p>
            <p>Product Price: ₹${product.price}</p>
            <p>Product Quantity: ${req.body.qty}</p>
            <p>Total Amount: ${totalAmt}</p>`;
            await sendEmail({
                to: user.email,
                subject: "Order Summary",
                text: mailText,
            })
            user.prevOrders.push({
                products: product,
                date: Date.now(),
                amount: totalAmt
            });
            await user.save();
        } catch(err){
            res.send({success: false, message: err});
        }
    }   
}