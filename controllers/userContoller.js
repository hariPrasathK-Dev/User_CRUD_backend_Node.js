const User = require("../models/users") ;
const asyncHandler = require("../util/asyncHandler") ;

const createUser = asyncHandler( async (req,res) => {
  const user = await User.create(req.body) ;
  res.status(201).json(
    {
      status: true,
      data: user
    }
  ) ;
}) ;

const getUsers = asyncHandler( async (req,res) => {
  const users = await User.find() ;

  res.status(200).send(
    {
      success: true,
      count: users.length,
      data: users,
    }
  );
  
}) ;

const getUserById =  asyncHandler( async (req,res) => {
  const user = await User.findById(req.params.id) ;


  if(!user) {
    res.status(404);
    throw new Error("User not found !!") ;
  }

  res.status(200).send(
    {
      success: true,
      data: user
    }
  );
  
}) ;

const updateUserById =  asyncHandler( async (req,res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  ) ;

  if(!user) {
    res.status(404);
    throw new Error("User not found !!") ;
  }

  res.status(200).send(
    {
      success: true,
      data: user
    }
  );
  
}) ;


const deleteUserById = asyncHandler( async (req,res) => {
  const user = await User.findByIdAndDelete(req.params.id) ;

  if(!user) {
    res.status(404);
    throw new Error("User not found !!") ;
  }

  res.status(200).send(
    {
      success: true,
      data: user
    }
  );
  
}) ;

module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById } ;