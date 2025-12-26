const Validate = (schema) => {
  return (req,res,next) => {
    const { error } = schema.validate(req.body) ;

    if(error) {
      console.log("Inside the error handling of validator") ;
      res.status(400).json({
        success: false,
        message: error.details[0].message
      }) ;
    }

    next() ;
  } ;
}

module.exports = Validate ;