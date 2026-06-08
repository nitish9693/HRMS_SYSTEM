const Attendance = require('../models/Attendance.model');

const markAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAttendanceByEmployee = async (req, res) => {
  try {
    const records = await Attendance.find({ employee: req.params.employeeId }).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { markAttendance, getAttendanceByEmployee };
