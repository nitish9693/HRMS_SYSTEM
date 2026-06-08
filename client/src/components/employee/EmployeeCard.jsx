const EmployeeCard = ({ employee }) => (
  <div style={{ background:'#fff', padding:'1rem', borderRadius:'8px', boxShadow:'0 1px 4px rgba(0,0,0,0.08)' }}>
    <h3>{employee?.user?.name}</h3>
    <p style={{ color:'#888', fontSize:'13px' }}>{employee?.designation}</p>
    <p style={{ color:'#888', fontSize:'13px' }}>{employee?.department?.name}</p>
  </div>
);

export default EmployeeCard;
