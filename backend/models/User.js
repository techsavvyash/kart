const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const UserSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Email is required!"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false,
    },
    mobile: {
        type: Number,
        required: [true, "Mobile Number is required"],
        length: 10,
    },
    resetToken: {
        type: String,
    },
    resetTokenExpire: {
        type: Date,
    },
    cart: {
        type: Array,
    },
    wishlist: {
        type: Array,
    },
    prevOrders: {
        type: Array,
    },
    accountType: {
        type: String,
        required: true
    },
   
}, {
    collection: "users",
});

UserSchema.pre("save", async function (next){
    if(!this.isModified("password")) next();

    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();

});

UserSchema.methods.verifyPwd = async function(password){
    return await bcryptjs.compare(password, this.password);
}

UserSchema.methods.genResetToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    //above lines hashes the token generated before storing it in the database;
    this.resetTokenExpire = Date.now() + 1000*60*30 ; // 30 minutes 
    return resetToken;
}

const User = mongoose.model("User", UserSchema);
module.exports = User;