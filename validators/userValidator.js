const joi = require("joi") ;

const createUserSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  age: joi.number().min(1),
  password: joi.string().min(4).required()
}) ;

module.exports = { createUserSchema } ;