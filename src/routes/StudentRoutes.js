const express = require("express");

const { registerStudent, getStudents } = require("../controllers/studentcontroller");

const router = express.Router();

router.post("/register", registerStudent);  // Register a new student
router.get("/", getStudents);              // Get all students

module.exports = router;
