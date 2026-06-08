const express = require('express');
const router = express.Router();
const { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.get('/',     protect, getAllEmployees);
router.get('/:id',  protect, getEmployeeById);
router.post('/',    protect, authorizeRoles('admin', 'hr'), createEmployee);
router.put('/:id',  protect, authorizeRoles('admin', 'hr'), updateEmployee);
router.delete('/:id', protect, authorizeRoles('admin'), deleteEmployee);

module.exports = router;
