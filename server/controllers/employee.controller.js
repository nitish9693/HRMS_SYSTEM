const Employee = require('../models/Employee.model');

// @GET /api/employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('user', 'name email role').populate('department', 'name');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @GET /api/employees/:id
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('user').populate('department');
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @POST /api/employees
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @PUT /api/employees/:id
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @DELETE /api/employees/:id
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
