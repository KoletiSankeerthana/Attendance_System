const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/StudentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/analytics", analyticsRoutes);

module.exports = app;

app.get("/", (req, res) => {
  res.send("✅ Backend is running on port 5000");
});
