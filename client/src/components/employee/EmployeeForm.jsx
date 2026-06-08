import { useState } from 'react';

const EmployeeForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ designation: '', phone: '', salary: '' });
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
      <input placeholder="Designation" value={form.designation} onChange={e => setForm({...form, designation:e.target.value})} style={{ width:'100%', padding:'8px', marginBottom:'8px', border:'1px solid #ddd', borderRadius:'4px' }} />
      <input placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} style={{ width:'100%', padding:'8px', marginBottom:'8px', border:'1px solid #ddd', borderRadius:'4px' }} />
      <input placeholder="Salary" type="number" value={form.salary} onChange={e => setForm({...form, salary:e.target.value})} style={{ width:'100%', padding:'8px', marginBottom:'1rem', border:'1px solid #ddd', borderRadius:'4px' }} />
      <button type="submit" style={{ padding:'8px 20px', background:'#4f46e5', color:'#fff', border:'none', borderRadius:'4px', cursor:'pointer' }}>Save</button>
    </form>
  );
};

export default EmployeeForm;
