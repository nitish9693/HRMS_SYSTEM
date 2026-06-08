const express = require('express');
const router = express.Router();
const { getDepartments, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/department.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.get('/',     protect, getDepartments);
router.post('/',    protect, authorizeRoles('admin'), createDepartment);
router.put('/:id',  protect, authorizeRoles('admin'), updateDepartment);
router.delete('/:id', protect, authorizeRoles('admin'), deleteDepartment);

module.exports = router;
