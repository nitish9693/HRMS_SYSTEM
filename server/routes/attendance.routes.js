const express = require('express');
const router = express.Router();
const { markAttendance, getAttendanceByEmployee } = require('../controllers/attendance.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/',                      protect, markAttendance);
router.get('/:employeeId',            protect, getAttendanceByEmployee);

module.exports = router;
