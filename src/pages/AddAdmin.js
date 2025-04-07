import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AddAdmin.css"

function AddPartner() {
  const [user, setUser] = useState({ name: "", status: "active" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) return navigate("/");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/add/addPartner",
        {
          name: user.name,
          email: user.email,
          password: user.password,
          role: "admin" // Default role for new users is "user"
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("Partner Registered!");
      setUser({ name: "", status: "active" }); // Reset form
      navigate("/admindashboard"); // Redirect to dashboard after successful registration
    } catch (err) {
      alert("Error while registering partner");
      console.error(err);
    }
  };

  return (
    <div className="fancy-container">
  <div className="fancy-card">
    <h2 className="fancy-title">🚀 Register as Admin or User</h2>
    <form className="fancy-form" onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Full Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <button type="submit">✨ Register Now</button>
    </form>
  </div>
</div>
  )
}

export default AddPartner;
