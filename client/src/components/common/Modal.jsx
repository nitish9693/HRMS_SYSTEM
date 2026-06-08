const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
      <div style={{ background:'#fff', borderRadius:'8px', padding:'2rem', minWidth:'400px', maxWidth:'600px', width:'90%' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1rem' }}>
          <h3>{title}</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', fontSize:'18px', cursor:'pointer' }}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
