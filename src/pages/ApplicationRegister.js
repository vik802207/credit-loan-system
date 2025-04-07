import React, { useState } from 'react';
import axios from 'axios';
import "./ApplicationResister.css"
import { useNavigate } from 'react-router-dom';
function ApplicationRegister() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    loanAmount: '',
    loanTenure: '',
    reason: '',
    employmentStatus: '',
    employmentAddress1: '',
    employmentAddress2: '',
    acceptedTerms: false,
    consentDisclosure: false,
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        createdAt: new Date(),
      };
      await axios.post('http://localhost:8000/api/loanapplication/register', payload);
      navigate('/')
      alert('Registration successful!');
    } catch (err) {
      navigate('/')
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Loan Registration</h2>

        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        
        <input type="number" name="loanAmount" placeholder="Loan Amount" value={formData.loanAmount} onChange={handleChange} required />
        <input type="number" name="loanTenure" placeholder="Loan Tenure (months)" value={formData.loanTenure} onChange={handleChange} required />

        <input type="text" name="reason" placeholder="Reason for Loan" value={formData.reason} onChange={handleChange} required />
        <input type="text" name="employmentStatus" placeholder="Employment Status" value={formData.employmentStatus} onChange={handleChange} required />
        <input type="text" name="employmentAddress1" placeholder="Employment Address Line 1" value={formData.employmentAddress1} onChange={handleChange} required />
        <input type="text" name="employmentAddress2" placeholder="Employment Address Line 2" value={formData.employmentAddress2} onChange={handleChange} />

        <label>
          <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
          I accept the terms and conditions
        </label>

        <label>
          <input type="checkbox" name="consentDisclosure" checked={formData.consentDisclosure} onChange={handleChange} required />
          I consent to the disclosure of my data
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ApplicationRegister;
