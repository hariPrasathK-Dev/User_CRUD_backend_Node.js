const joi = require("joi") ;

const createUserSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  age: joi.number().min(1)
}) ;

module.exports = { createUserSchema } ;