import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';

const Dashboard = () => (
  <div style={{ display:'flex' }}>
    <Sidebar />
    <div style={{ flex:1, padding:'2rem' }}>
      <Navbar title="Dashboard" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1rem', marginTop:'2rem' }}>
        {[['Total Employees','128'],['Present Today','102'],['On Leave','6'],['Departments','8']].map(([label,val]) => (
          <div key={label} style={{ background:'#fff', padding:'1.5rem', borderRadius:'8px', boxShadow:'0 1px 4px rgba(0,0,0,0.08)' }}>
            <p style={{ color:'#888', fontSize:'13px' }}>{label}</p>
            <h2 style={{ fontSize:'28px', fontWeight:'600' }}>{val}</h2>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
