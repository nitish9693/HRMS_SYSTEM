const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  user:         { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  employeeId:   { type: String, unique: true },
  department:   { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  designation:  { type: String },
  phone:        { type: String },
  address:      { type: String },
  dateOfBirth:  { type: Date },
  joiningDate:  { type: Date, default: Date.now },
  salary:       { type: Number, default: 0 },
  profileImage: { type: String },
  gender:       { type: String, enum: ['Male', 'Female', 'Other'] },
  status:       { type: String, enum: ['Active', 'Inactive', 'Terminated'], default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
