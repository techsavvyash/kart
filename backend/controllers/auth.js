const crypto = require("crypto");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils").sendEmail;

exports.signup = async (req, res, next)=>{
    
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;
    const checkUser = await User.findOne({email});
    if(!checkUser){
        try{    
            const newUser = await User.create({email, password, mobile});
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
    if(!email||!password){
        const message = "Please enter both email and password";
        res.send(message);
    }

    try{
        const user = await User.findOne({email}).select("+password");
        console.log(user);
        if(user){
            const isMatch = await user.verifyPwd(password);
            if(isMatch){
                const message = "login successful";
                res.session.userId = user._id;
                res.send(user, 200, message);
            } else {
                const message = "Entered password is incorrect!"
                res.send(message);
            }
        } else {
            const message = "User not registered";
            res.send(message);
        }
    } catch(err){
        res.send(err);
    }
}

exports.logout = async (req, res, next)=>{
    req.session.userId =  null;
    res.send("Successfully Logged Out!");
}

exports.forgotPwd = async (req, res, next)=>{
    const email = req.body.email;
    const checkUser = await User.findOne({email});
    if(checkUser){
        const token = checkUser.genResetToken();

        const resetURL = `http://localhost:5454/auth/resetPwd?${token}`;
        const message = `<h1>Hey, Here is your password reset link!</h1><br>
        <p>${resetURL}</p>`
        sendEmail({
            to: email,
            subject: "Kart Password Reset Link",
            text: message,
        });

    } else {
        res.send("This email is not registered!");
    }
}

exports.resetPwd = async (req, res, next)=>{
    const token = req.param;
}