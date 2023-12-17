const express = require("express");
const {getSchedules, addTabletSchedule, addLiquidSchedule, addInsulinSchedule} = require('../controllers/schedule.controller')
const router = express.Router();
const auth = require('../middlewares/auth');

router.get("/", getSchedules);
router.post("/addTabletSchedule", auth, addTabletSchedule);
router.post("/addLiquidSchedule", auth, addLiquidSchedule);
router.post("/addInsulinSchedule", auth, addInsulinSchedule);

module.exports = router;
