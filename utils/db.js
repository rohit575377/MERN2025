const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/mern2025";
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connection successful to DB");
  } catch {
    console.error("database connection failed");
  }
}

module.exports = connectDB;