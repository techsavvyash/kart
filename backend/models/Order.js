const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please Login In"],
        ref: 'users'
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "No Products to checkout!"],
        ref: 'products'
    }],
    paymentId : String,
    orderId: String,
    status: String
}, {
    collection: "orders"
}) ;

OrderSchema.methods.setStatus = function(status) {
    this.status = status ;
}

OrderSchema.methods.setPaymentId = function(paymentId) {
    this.paymentId = paymentId ;
}

OrderSchema.methods.setOrderId = function(orderId) {
    this.orderId = orderId ;
}

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order; 