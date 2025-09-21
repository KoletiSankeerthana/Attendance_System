const express = require("express");


const { getAttendanceAnalytics } = require("../controllers/analyticscontroller"); // capital C

const router = express.Router();

router.get("/", getAttendanceAnalytics); // Get attendance percentage per student

module.exports = router;
