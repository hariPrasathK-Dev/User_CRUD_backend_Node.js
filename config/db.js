const mongoose = require("mongoose") ;

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI) ;
    console.log("MONGODB connected succesfully") ;
  } catch(error) {
    console.error("MONGODB connection failed !!") ;
    console.log(error.message) ;
    process.exit(1) ;
  }
} ;

module.exports = { connectDB } ;