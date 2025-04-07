import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // 👈 Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">💼 Credit Loan Management System</h1>
      <div className="card-grid">
        {/* User Panel */}
        <div className="login-card user-card">
          <h2>👤 User Panel</h2>
          <button onClick={() => navigate('/applicationLogin')} className="btn primary">Login</button>
          <button onClick={() => navigate('/applicationRegister')} className="btn secondary">Signup</button>
        </div>

        {/* Admin Panel */}
        <div className="login-card admin-card">
          <h2>🛡️ Admin / Verifier</h2>
          <button onClick={() => navigate('/login')} className="btn primary">Login</button>
          <button onClick={() => navigate('/register')} className="btn secondary">Signup</button>
        </div>
      </div>

      <p className="footer-note">Made with ❤️ by Vikash Gupta @ IIITN</p>
    </div>
  );
};

export default Home;
