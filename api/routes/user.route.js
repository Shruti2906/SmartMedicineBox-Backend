const express = require("express");
const { getUsers, registerUser, loginUser, addMachineCodeOfUser } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addMachineCode", auth, addMachineCodeOfUser);

module.exports = router;
