require("dotenv").config({path: "./config.env"});
const express = require('express');
const app = express();
const cors = require('cors');
const session = require("express-session");
const connectToDB = require("./config/db");
const createOrders = require("./config/createOrder");
const RazorPay = require("razorpay") ;
const PORT = process.env.PORT

connectToDB();


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("crossDomain", true);
    next();
  });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: "safdiwugfiuwsgfiawfiwevbfiuwevbfiwievfb",
    saveUninitialized: true,
    resave: true,
    SameSite: 'strict'
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


app.get('/', (req, res)=>{
    res.send("Server up and running!!");
})

app.use("/auth", require("./routes/auth"));
app.use("/shop", require("./routes/products"));
app.use("/seller", require("./routes/seller"));




app.get('/test', (req, res) => {
    res.redirect(307, "https://github.com")
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})
