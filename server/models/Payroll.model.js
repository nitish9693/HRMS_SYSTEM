const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employee:     { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  month:        { type: Number, required: true },
  year:         { type: Number, required: true },
  basicSalary:  { type: Number, required: true },
  allowances:   { type: Number, default: 0 },
  deductions:   { type: Number, default: 0 },
  netSalary:    { type: Number },
  paymentDate:  { type: Date },
  status:       { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Payroll', payrollSchema);
