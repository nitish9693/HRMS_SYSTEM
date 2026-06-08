const express = require('express');
const router = express.Router();
const { generatePayroll, getPayrollByEmployee } = require('../controllers/payroll.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.post('/',               protect, authorizeRoles('admin', 'hr'), generatePayroll);
router.get('/:employeeId',     protect, getPayrollByEmployee);

module.exports = router;
