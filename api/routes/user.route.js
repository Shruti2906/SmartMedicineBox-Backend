const express = require("express");
// const { getUsers, registerUser, loginUser } = require("../controllers/user.controller");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.route("/").get(userController.getUsers);
router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.loginUser);
// router.post("/register", userController.registerUser);
// router.post("/login", userController.loginUser);

module.exports = router;
