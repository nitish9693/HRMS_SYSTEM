import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/authSlice';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser(form));
    if (res.meta.requestStatus === 'fulfilled') navigate('/');
  };

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <form onSubmit={handleSubmit} style={{ background:'#fff', padding:'2rem', borderRadius:'8px', width:'360px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom:'1.5rem', textAlign:'center' }}>HRMS Login</h2>
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
          style={{ width:'100%', padding:'10px', marginBottom:'1rem', border:'1px solid #ddd', borderRadius:'4px' }} />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})}
          style={{ width:'100%', padding:'10px', marginBottom:'1rem', border:'1px solid #ddd', borderRadius:'4px' }} />
        <button type="submit" style={{ width:'100%', padding:'10px', background:'#4f46e5', color:'#fff', border:'none', borderRadius:'4px', cursor:'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
