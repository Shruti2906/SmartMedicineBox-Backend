const express = require("express");
const {getSchedules, addTabletSchedule, addLiquidSchedule, addInsulinSchedule,} = require("../controllers/schedule.controller");
const router = express.Router();
const auth = require("../middlewares/auth");
const {validateAddTabletSchedule, validateAddLiquidSchedule, validateAddInsulinSchedule,} = require("../middlewares/validation");

router.get("/", getSchedules);
router.post("/addTabletSchedule", auth, validateAddTabletSchedule, addTabletSchedule);
router.post("/addLiquidSchedule", auth, validateAddLiquidSchedule, addLiquidSchedule);
router.post("/addInsulinSchedule", auth, validateAddInsulinSchedule, addInsulinSchedule);

module.exports = router;
