require("dotenv").config({path: "./config.env"});
const express = require('express');
const app = express();
const session = require("express-session");
const connectToDB = require("./config/db");

const PORT = process.env.PORT
connectToDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: "safdiwugfiuwsgfiawfiwevbfiuwevbfiwievfb",
    saveUninitialized: true,
    resave: true,
}))

app.get('/', (req, res)=>{
    res.send("Server up and running!!");
})

app.use("/auth", require("./routes/auth"));

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})