
const mongoose = require("mongoose");





const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/login");

    console.log("Database connected");
    
}

module.exports = connectDB;