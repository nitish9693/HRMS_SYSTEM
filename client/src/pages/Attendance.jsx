import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';

const Attendance = () => (
  <div style={{ display:'flex' }}>
    <Sidebar />
    <div style={{ flex:1, padding:'2rem' }}>
      <Navbar title="Attendance" />
      <p style={{ marginTop:'2rem', color:'#888' }}>Attendance page — add your components here.</p>
    </div>
  </div>
);

export default Attendance;
