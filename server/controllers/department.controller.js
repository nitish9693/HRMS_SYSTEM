const Department = require('../models/Department.model');

const getDepartments    = async (req, res) => { try { res.json(await Department.find()); } catch (e) { res.status(500).json({ message: e.message }); }};
const createDepartment  = async (req, res) => { try { res.status(201).json(await Department.create(req.body)); } catch (e) { res.status(500).json({ message: e.message }); }};
const updateDepartment  = async (req, res) => { try { res.json(await Department.findByIdAndUpdate(req.params.id, req.body, { new: true })); } catch (e) { res.status(500).json({ message: e.message }); }};
const deleteDepartment  = async (req, res) => { try { await Department.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); } catch (e) { res.status(500).json({ message: e.message }); }};

module.exports = { getDepartments, createDepartment, updateDepartment, deleteDepartment };
