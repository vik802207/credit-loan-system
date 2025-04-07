import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get("http://localhost:8000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        alert("Session expired, please login again");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="dashboard-wrapper">
    <div className="welcome-row">
      <div className="welcome-section">
        <h2>👋 Welcome, <span className="highlight">{user?.username}</span></h2>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
  
      <div className="wallet-card">
        <h4>💰 Wallet Balance</h4>
        <p className="wallet-amount">₹{user?.wallet || 0}</p>
      </div>
    </div>
  
    <h1 className="dashboard-title">Loan Dashboard</h1>
  
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Loan Amount</h4>
        <p className="value green">₹{user?.loanAmount}</p>
      </div>
  
      <div className="stat-card">
        <h4>Loan Tenure</h4>
        <p className="value blue">{user?.loanTenure} months</p>
      </div>
  
      <div className="stat-card">
        <h4>Loan Status</h4>
        <p className={`value ${
          user?.status === "approved" ? "green" :
          user?.status === "rejected" ? "red" : "yellow"
        }`}>
          {user?.status}
        </p>
      </div>
  
      <div className="stat-card">
        <h4>Reason</h4>
        <p className="value purple">{user?.reason}</p>
      </div>
  
      <div className="stat-card">
        <h4>Verifier Status</h4>
        <p className={`value ${
          user?.verifierStatus === "verified" ? "green" :
          user?.verifierStatus === "rejected" ? "red" : "yellow"
        }`}>
          {user?.verifierStatus}
        </p>
      </div>
  
      <div className="stat-card">
        <h4>Admin Status</h4>
        <p className={`value ${
          user?.adminStatus === "approved" ? "green" :
          user?.adminStatus === "rejected" ? "red" : "yellow"
        }`}>
          {user?.adminStatus}
        </p>
      </div>
    </div>
  
  
    <div className="dashboard-container">
      <div className="section-card">
        <h2>Profile Information</h2>
        <p>Employment Status: {user?.employmentStatus}</p>
        <p>Address: {user?.employmentAddress1}, {user?.employmentAddress2}</p>
      </div>
  
      <div className="section-card">
        <h2>Consent</h2>
        <p>Accepted Terms: {user?.acceptedTerms ? "Yes" : "No"}</p>
        <p>Disclosure Consent: {user?.consentDisclosure ? "Yes" : "No"}</p>
      </div>
    </div>
  </div>
  
        );
  
};

export default Dashboard;
