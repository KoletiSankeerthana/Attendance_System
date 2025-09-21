const db = require("../config/firebase");

// Register Student
exports.registerStudent = async (req, res) => {
  try {
    const { name, rollNo, faceEmbedding } = req.body;

    if (!name || !rollNo || !faceEmbedding) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const studentRef = db.collection("students").doc();
    await studentRef.set({
      id: studentRef.id,
      name,
      rollNo,
      faceEmbedding,   // face-api.js embedding stored
      createdAt: new Date(),
    });

    res.status(201).json({ message: "Student registered", id: studentRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Students
exports.getStudents = async (req, res) => {
  try {
    const snapshot = await db.collection("students").get();
    const students = snapshot.docs.map(doc => doc.data());
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
