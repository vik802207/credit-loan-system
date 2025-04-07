import { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
const navigate=useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
console.log(form.role);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/register',
        form
      );
      navigate('/');
      alert('Registration successful');
      console.log('Registered user:', res.data);
    } catch (err) {
      console.error('Registration error:', err);
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <select name="role" onChange={handleChange}>
          
          <option value="admin">Admin</option>
          <option value="verifier">Verifier</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
