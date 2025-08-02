import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="glass-card text-center">
        
       <img src="/assets/images/booking-illustration.svg" alt="Booking" style={{width: 100, marginBottom: 24, opacity: 0.95}} />
        <h1 className="fw-bold mb-3" style={{fontSize: '2.5rem', color: '#071a52'}}>Welcome to <span style={{color: '#4caf50'}}>ServEase</span></h1>
        <p className="lead mb-4" style={{fontSize: '1.25rem', color: '#333'}}>Book your desired services easily, quickly, and securely.</p>
        <Link to="/services" className="btn btn-success btn-lg px-5 py-2 rounded-pill shadow-sm" style={{fontWeight: 600, fontSize: '1.1rem'}}>View All Services</Link>
        {/* Decorative shapes */}
        <div style={{position: 'absolute', top: -30, right: -30, width: 80, height: 80, background: '#8eec69', borderRadius: '50%', opacity: 0.18}}></div>
        <div style={{position: 'absolute', bottom: -30, left: -30, width: 100, height: 100, background: '#071a52', borderRadius: '50%', opacity: 0.10}}></div>
      </div>
    </div>
  );
}

export default Home;
