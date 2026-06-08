const express = require('express');
const router = express.Router();
const { applyLeave, updateLeaveStatus, getAllLeaves } = require('../controllers/leave.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.get('/',         protect, authorizeRoles('admin', 'hr'), getAllLeaves);
router.post('/',        protect, applyLeave);
router.put('/:id',      protect, authorizeRoles('admin', 'hr'), updateLeaveStatus);

module.exports = router;
