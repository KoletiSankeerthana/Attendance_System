const db = require("../config/firebase");

// Mark Attendance
exports.markAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;

    if (!studentId || !status) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const attendanceRef = db.collection("attendance").doc();
    await attendanceRef.set({
      id: attendanceRef.id,
      studentId,
      status,         // "Present" or "Absent"
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      markedAt: new Date(),
    });

    res.status(201).json({ message: "Attendance marked", id: attendanceRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Attendance
exports.getAttendance = async (req, res) => {
  try {
    const snapshot = await db.collection("attendance").get();
    const attendance = snapshot.docs.map(doc => doc.data());
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
