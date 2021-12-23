const Razorpay = require("razorpay");

var instance = new Razorpay({ 
    key_id: 'rzp_test_wA6CMQo6R8vt6t',  
    key_secret: 'd6Ookh3AtEjkUNcs5Pyn1Bsz',
});


async function createOrder(amt, rcpt) {
    var ord ;
    var options = {  
        amount: amt,    
        currency: "INR",  
        receipt: rcpt
    };
    const order = await instance.orders.create(options);
    return order ;
}

module.exports = createOrder ;