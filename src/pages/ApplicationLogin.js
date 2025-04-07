import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationLogin.css'; // CSS file
import { useNavigate } from 'react-router-dom';
function ApplicationLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const navigate = useNavigate();;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/loanapplication/login', formData);
      alert('Login successful!');
      navigate("/dashboard");
      localStorage.setItem('token', res.data.token); // Save token for auth
      // Redirect if needed
    } catch (err) {
      navigate("/");
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>User Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ApplicationLogin;
