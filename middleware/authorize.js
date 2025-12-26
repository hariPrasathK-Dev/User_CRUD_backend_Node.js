const authorize = (...roles) => {
  return (req,res,next) => {
    if(!roles.includes(req.user.role)) {
      res.status(403) ;
      res.json({
        message: "Not authorized !"
      }) ;
    }
    next() ;
  }
}

module.exports = authorize ;