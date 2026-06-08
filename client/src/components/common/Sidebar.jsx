import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const links = [
  { to: '/',           label: '🏠 Dashboard' },
  { to: '/employees',  label: '👥 Employees' },
  { to: '/attendance', label: '📅 Attendance' },
  { to: '/leaves',     label: '🌴 Leaves' },
  { to: '/payroll',    label: '💰 Payroll' },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ width:'220px', minHeight:'100vh', background:'#1e1e2e', color:'#fff', padding:'1.5rem 1rem' }}>
      <h2 style={{ marginBottom:'2rem', fontSize:'18px', textAlign:'center' }}>HRMS</h2>
      {links.map(l => (
        <NavLink key={l.to} to={l.to} end={l.to==='/'} style={({ isActive }) => ({
          display:'block', padding:'10px 12px', marginBottom:'4px', borderRadius:'6px',
          textDecoration:'none', color: isActive ? '#fff' : '#aaa',
          background: isActive ? '#4f46e5' : 'transparent',
        })}>
          {l.label}
        </NavLink>
      ))}
      <button onClick={() => { dispatch(logout()); navigate('/login'); }}
        style={{ marginTop:'2rem', width:'100%', padding:'10px', background:'#ef4444', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer' }}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
