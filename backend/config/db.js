
const mongoose = require("mongoose");

const connectToDB = async ()=> {
    await mongoose.connect(process.env.MONGO_URI, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });

    console.log("DB Connection, Successful!");
}

module.exports = connectToDB;