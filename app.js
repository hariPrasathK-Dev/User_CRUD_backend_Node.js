/* require("dotenv").config() ;

const express = require("express") ;

const connectDB = require("./config/db") ;

const app = express() ;

connectDB.connectDB() ;

app.use(express.json()) ;

app.get("/", (req,res) => {

  res.send("API running !!") ;

});


app.listen(process.env.PORT, () => {
  console.log(`Server started at the port ${process.env.PORT}`) ;
})

*/

require("dotenv").config() ;

const express = require("express") ;
const connectDB = require("./config/db") ;
const userRouter = require("./routes/users") ;

const app = express() ;
connectDB.connectDB() ;

app.use(express.json()) ;

app.use("/users",userRouter) ;
app.use("/user", userRouter) ;
app.use("/auth", require("./routes/auth")) ;

app.get("/", (req,res) => {
  res.send("API running !!") ;
}) ;

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("PORT:", process.env.PORT);


app.listen(process.env.PORT, () => {
  console.log(`Server started at port : ${process.env.PORT}`) ;
})