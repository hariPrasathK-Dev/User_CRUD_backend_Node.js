const express = require("express");
const router = express.Router();
const { createUserSchema } = require("../validators/userValidator") ;
const validate = require("../middleware/validate") ;
const protect = require("../middleware/protect") ;
const authorize = require("../middleware/authorize") ;

const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userContoller");

router.post("/", validate(createUserSchema), createUser);
router.get("/", protect, getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", protect, authorize("admin"), deleteUserById);

module.exports = router;