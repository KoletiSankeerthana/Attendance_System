const express = require("express");
const { markAttendance, getAttendance } = require("../controllers/attendanceController");

const router = express.Router();

router.post("/mark", markAttendance);    // Mark attendance
router.get("/", getAttendance);          // Get all attendance records

module.exports = router;
