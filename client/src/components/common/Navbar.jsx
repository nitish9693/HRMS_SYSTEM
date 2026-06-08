import { useSelector } from 'react-redux';

const Navbar = ({ title }) => {
  const { user } = useSelector(state => state.auth);
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 0', borderBottom:'1px solid #eee' }}>
      <h1 style={{ fontSize:'20px', fontWeight:'600' }}>{title}</h1>
      <span style={{ fontSize:'14px', color:'#666' }}>Welcome, {user?.name}</span>
    </div>
  );
};

export default Navbar;
