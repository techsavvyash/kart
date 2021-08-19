const crypto = require("crypto");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendMail").sendEmail;


exports.signup = async (req, res, next)=>{
    const {email, password, mobile, resetToken, resetTokenExpire, accountType, cart} = req.body;
    const checkUser = await User.findOne({email});
    if(!checkUser){
        try{    
            const newUser = await User.create({email, password, mobile, resetToken, resetTokenExpire, accountType, cart});
            res.send({
                message: "user created successfully",
                user: newUser,
            });
        } catch (err){
            res.send(err);
        }
    } else {
        res.send("Entered email is already registered, kindly login!");
    }    
}

exports.login = async (req, res, next)=>{

    const email = req.body.email;
    const password = req.body.password;
    //checking that the user has entered both email and pwd
    if(!email || !password){
        res.send({success: false, message: "Please enter both email and password"});
    }

    try{
        const user = await User.findOne({email}).select("+password");
        if(user){
            const isMatch = await user.verifyPwd(password);
            if(isMatch){
                req.session.userId = user._id;
                res.send({success: true, message: "Login Successful", type: user.accountType, account: user});
            } else {
                res.send({success: false, message:"Entered password is incorrect!"});
            }
        } else {
            res.send({success: false, message: "User not registered!"});
        }
    } catch(err){
        res.send(err);
    }
}

exports.sellerLogin = async(req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    //checking that the user has entered both email and pwd
    if(!email || !password){
        res.send({success: false, message: "Please enter both email and password"});
    }
    try{
        const user = await User.findOne({email}).select("+password");
        if(user){
            if(user.accountType !== "seller"){
                res.send({success: false, message: "Login with a seller account"});
            }
            const isMatch = await user.verifyPwd(password);
            if(isMatch){
                req.session.userId = user._id;
                res.send({success: true, message: "Login Successful", type: user.accountType, account: user});
            } else {
                res.send({success: false, message:"Entered password is incorrect!"});
            }
        } else {
            res.send({success: false, message: "User not registered!"});
        }
    } catch(err){
        res.send(err);
    }
}

exports.logout = (req, res, next)=>{

    req.session.userId =  null;
    res.send({success: false, message: "Successfully Logged Out!"});

}

exports.forgotPwd = async (req, res, next)=>{

    const email = req.body.email;
    const checkUser = await User.findOne({email});
    if(checkUser){
        const token = checkUser.genResetToken();

        const resetURL = `http://localhost:5454/auth/resetPwd/${token}`;
        const message = `<h1>Hey, Here is your password reset link!</h1><br>
        <a href=${resetURL} clicktracking=off>${resetURL}</a>`
        try{
            await sendEmail({
                to: email,
                subject: "Kart Password Reset Link",
                text: message,
            });
            await checkUser.save();
            console.log(checkUser);
            res.send({success: false, message: "A link to reset your password has been sent to your registered email"});
        } catch(err){
            res.send({success: false, message: "The following error occuered\n" + err});
        }
        
    } else {
        res.send({success: false, message: "This email is not registered!"});
    }
}

exports.resetPwd = async (req, res, next)=>{
    
    const token = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try{
        const findUser = await User.findOne({resetToken: token, resetTokenExpire: {$gt: Date.now()}}).select("+password");
        if(findUser){
            findUser.password = req.body.password;
            findUser.resetToken = undefined;
            findUser.resetTokenExpire = undefined;
            await findUser.save();
            res.send({success: true, message: "Your password has been successfully reset, proceed to login!"} );
        } else {
            res.send({success: false, message: "Your password reset token has expired, kindy regenerate it!"} );
        }
    } catch(err){
        res.send(err);
    }   
}