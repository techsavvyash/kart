require("dotenv").config({path: "./config.env"});
const express = require('express');
const app = express();
const cors = require('cors');
const session = require("express-session");
const connectToDB = require("./config/db");

const PORT = process.env.PORT

connectToDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: "safdiwugfiuwsgfiawfiwevbfiuwevbfiwievfb",
    saveUninitialized: true,
    resave: true,
}))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.get('/', (req, res)=>{
    res.send("Server up and running!!");
})

app.use("/auth", require("./routes/auth"));
app.use("/shop", require("./routes/products"));
app.use("/seller", require("./routes/seller"));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})