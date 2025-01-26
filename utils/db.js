const mongoose = require("mongoose");
// const URI = '${{ secrets.MONGO_URI }}';
// const URI = "mongodb+srv://harshitalavania:hlavania05@quizplatform.rn9xp.mongodb.net/?retryWrites=true&w=majority&appName=quizPlatform";
const URI = process.env.MONGO_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful to db");
  } 
  catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectdb;
