const User = require("../models/users") ;
const asyncHandler = require("../util/asyncHandler") ;
const jwt = require("jsonwebtoken") ;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d"}) ;
}

const registerUser = asyncHandler(async (req,res) => {
  const { name, email, age, password,role } = req.body ;

  console.log(req.body) ;
  const userExists = await User.findOne( { email }) ;

  if(userExists) {
    res.status(400) ;
    throw new Error("User already Exists !!") ;
  }

  const user = await User.create({ name, email, age, password, role }) ;

  res.status(201).json(
    {
      success: true,
      token: generateToken(user._id)
    }
  ) ;
}) ;

const loginUser = asyncHandler(async (req,res) => {
  const { email, password } = req.body ;

  const user = await User.findOne({ email }) ;

  if(!user) {
    res.status(401) ;
    throw new Error("Email doesn't exist in our DB") ;
  } else if(!(await user.matchPassword(password))) {
    res.status(401) ;
    throw new Error("Invalid Password for this email") ;
  }

  res.json({
    success: true,
    token: generateToken(user._id)
  }) ;
});

module.exports = { registerUser, loginUser }