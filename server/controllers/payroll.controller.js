const Payroll = require('../models/Payroll.model');

const generatePayroll = async (req, res) => {
  try {
    const { employee, month, year, basicSalary, allowances, deductions } = req.body;
    const netSalary = basicSalary + (allowances || 0) - (deductions || 0);
    const payroll = await Payroll.create({ employee, month, year, basicSalary, allowances, deductions, netSalary });
    res.status(201).json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPayrollByEmployee = async (req, res) => {
  try {
    const records = await Payroll.find({ employee: req.params.employeeId }).sort({ year: -1, month: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generatePayroll, getPayrollByEmployee };
