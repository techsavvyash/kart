const Product = require("../models/Product");
const User = require("../models/User");
const Order = require("../models/Order");
const { sendEmail } = require("../utils/sendMail");
const createOrder = require("../config/createOrder");

exports.getInfo = async (req, res, next) => {
    const id = req.params.prodId;
    try {
        const prod = await Product.findOne({_id: id});
        if(prod) {
            res.send({success: true, product: prod, message: "Product fetched!"});
        }
    } catch(err) {
        console.log("inside err " + err);
        res.send({success: false, message: err, product: {}});
    }
}

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
        try {
            const {item, list} = req.body;
            console.log(item, list) ;
            const product = await Product.findOne({_id: item})//.select("name", "price");
            console.log(product) ;
            if(product) {
                const user = await User.findOne({_id: req.session.userId});
                if(user) {
                    if(!list) {
                        res.send({success: false, message: "Invalid Request!"});
                        return ;
                    } else {
                        if(list.localeCompare("wishlist") == 0) {
                            user.wishlist.push(product).then(
                            res.send({success: true, message: `Product has been added to your wishlist`})
                            );
                        } else if(list.localeCompare("cart") == 0) {
                            try { 
                                user.cart = [...user.cart, product] ;
                                res.send({success: true, message: `Product has been added to your cart`})
                            } catch(err) {
                                console.log(err) ;
                            }
                        }
                        await user.save();
                    }
                } else {
                    res.send({success: false, message: "User Not Found!"});
                }
            } else {
                res.send({success: false, message:"Something went wrong"});
            }
        } catch(err){
            console.log(err);
            res.send({success: false, message: err});
        }
    } else {
        res.send({success: false, message:"You need to login to perform this action"});
    }
}

exports.readlist = async (req, res, next) => {
    if(req.session.userId){
        try {
            let list = req.query.list;
            console.log(req.query) ;
            console.log(list);
            if(!list) {
                res.send({success: false, message: "Invalid Request!"});
                return ;
            }
            const user = await User.findOne({_id: req.session.userId});
            if(!user) {
                res.send({success: false, message: "Login First"});
                return ;
            } 
            console.log(user) ;
            console.log(user.cart) ;
            // res.send({success: true, message: user.cart});
            // return ;
            if(list.localeCompare("cart") == 0) {
                res.send({success: true, message: user.cart});
            } else if(list.localeCompare("wishlist") == 0) {
                res.send({success: true, message: user.wishlist});
            }
        } catch(err) {
            res.send({success: false, message: err});
        }
        
    } else {
        res.send({success: false, message: "You need to login first"});
    }
}

exports.review = async (req, res, next)=>{
    try{
        const product = await Product.findOne({_id: req.body.id});
        product.addReview({name: req.body.name, text: req.body.text});
        res.send({
            message: "Review added successfully!",
            success: true
        }).status(201);
    } catch(err) {
        res.send({
            message: err,
            success: false
        });
    }
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
        let items = [], userId = user._id ;
        for(let item in cart){
            totalAmt += ((cart[item].price)*(cart[item].qty));
            const product = await Product.findOne({_id: cart[item]._id});
            message += '<div>' + '<p>Product Name: ' + cart[item].name + '</p>' + '<p>Product Price: ₹' + cart[item].price + '</p>' + '<p>Product Quantity: ' + cart[item].qty + '</p>' + '</div>'
            product.updateQty("decrease", cart[item].qty);
            items.push(cart[item]._id) ;
        }
        for(let item in cart) {
            items.push(cart[item]._id);
        }
        const newOrder = await Order.create({userId, items}) ;
        console.log("newOrder: " + newOrder) ;

        const order = await createOrder(totalAmt, newOrder._id);
        const orderId = order.id ;
        //newOrder.setOrderId(orderId) ;
        newOrder.orderId = orderId ;
        await newOrder.save();
        console.log(order);
        res.send({success: true, orderId: orderId, amt: totalAmt });
        
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
            const newOrder = await Order.create({
                userId: user._id, 
                items: product
            });
            const order = await createOrder(totalAmt, newOrder._id);
            const orderId = order.id ;
            //newOrder.setOrderId(orderId);
            newOrder.orderId = orderId ;
            await newOrder.save();
            res.send({success: true, orderId: orderId});

            const mailText = `<h3>Order Summary</h3>
            <p>Product Name: ${product.name}</p>
            <p>Product Price: ₹${product.price}</p>
            <p>Product Quantity: ${req.body.qty}</p>
            <p>Total Amount: ${totalAmt}</p>`;
            // await sendEmail({
            //     to: user.email,
            //     subject: "Order Summary",
            //     text: mailText,
            // })
        } catch(err){
            console.log(err) ;
            res.send({success: false, message: err});
        }
    }   
}

exports.verifySignature = async (req, res, next) => {
        console.log(req.body) ;
        let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
        const order = await Order.findOne({orderId: req.body.razorpay_order_id});
        const user = await User.findOne({_id: order.userId});
        var crypto = require("crypto");
        var expectedSignature = crypto.createHmac('sha256', 'd6Ookh3AtEjkUNcs5Pyn1Bsz')
                                      .update(body.toString())
                                      .digest('hex');
        console.log("sig received " , req.body.razorpay_signature);
        console.log("sig generated " , expectedSignature);
        var response = {
            "signatureIsValid":"false"
        }
        
        if(expectedSignature === req.body.razorpay_signature) {
            response = {
                "signatureIsValid":"true"
            }
            
            order.setPaymentId(req.body.razorpay_payment_id);
            user.prevOrders.push(order._id) ;
            user.cart = [];
            await user.save();
            //const mailText = `<h3>Your Order Summary</h3>` + message + `<p>Total Amount = ${totalAmt}</p>`;
            // try {
            //     sendEmail({
            //         to: user.email,
            //         subject: "Order Summary",
            //         text: mailText,
            //     })
            // } catch(err) {
            //     console.log(err) ;
            // }
            order.setStatus("confirmed");
            res.send({success: true, message:"Your order has been placed and details have been emailed to you"});
        } else {
            order.setStatus("failed");
            res.send({success: false, message: `There was some technical error, please note the payment id: ` + req.body.razorpay_payment_id + ` for further communication!`});
        }
         



} 