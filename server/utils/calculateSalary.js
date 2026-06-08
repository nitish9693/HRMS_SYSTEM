const calculateNetSalary = (basicSalary, allowances = 0, deductions = 0) => {
  return basicSalary + allowances - deductions;
};

module.exports = { calculateNetSalary };
