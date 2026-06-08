const Leave = require('../models/Leave.model');

const applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLeaveStatus = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, approvedBy: req.user._id },
      { new: true }
    );
    res.json(leave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate('employee').sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { applyLeave, updateLeaveStatus, getAllLeaves };
