const db = require("../config/firebase");

exports.getAttendanceAnalytics = async (req, res) => {
  try {
    const attendanceSnapshot = await db.collection("attendance").get();
    const attendanceData = attendanceSnapshot.docs.map(doc => doc.data());

    const analytics = {};

    attendanceData.forEach(record => {
      if (!analytics[record.studentId]) {
        analytics[record.studentId] = { present: 0, total: 0 };
      }
      if (record.status === "Present") {
        analytics[record.studentId].present += 1;
      }
      analytics[record.studentId].total += 1;
    });

    const result = Object.keys(analytics).map(studentId => ({
      studentId,
      attendancePercent: (analytics[studentId].present / analytics[studentId].total) * 100,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
