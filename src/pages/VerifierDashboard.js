import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VerifierDashboard.css";
import { useNavigate } from 'react-router-dom';

const VerifierDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const appsPerPage = 10; // ✅ Fixed at 10 per page
  const [user, setUser] = useState(null);
//   const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios
      .get("http://localhost:8000/api/adminorverifier/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data))
      .catch(() =>{
        alert("Error");
        navigate("/");
      });




    axios
      .get("http://localhost:8000/api/mapalltoverifier/applications", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setApplications(res.data))
      .catch((err) => {
        console.error("Failed to fetch applications:", err);
      });
  }, []);
  const confirmStatusChange = (id, newStatus) => {
    setSelectedId(id);
    setSelectedStatus(newStatus);
    setShowPopup(true);
  };
  const handleStatusChange = async (id, newStatus) => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/");

    try {
      await axios.put(
        `http://localhost:8000/api/verifierChangeStatus/loansStatus/${id}`,
        { verifierStatus: newStatus }, // 👈 adjust field name if needed
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // ✅ Update the application list locally
      setApplications((prev) =>
        prev.map((app) =>
          app._id === id ? { ...app, verifierStatus: newStatus } : app
        )
        
      );
      setShowPopup(false);
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Status update failed");
    };
} 
// Pagination logic
const indexOfLast = currentPage * appsPerPage;
const indexOfFirst = indexOfLast - appsPerPage;
const currentApps = applications.slice(indexOfFirst, indexOfLast);
const totalPages = Math.ceil(applications.length / appsPerPage);
return (
    <div className="verifier-dashboard">
      <h1 className="top-heading">📋 Verifier Dashboard</h1>

      {user && (
        <div className="welcome-card">
          <div className="welcome-left">
            <img
              src="https://api.dicebear.com/7.x/identicon/svg?seed=verifier"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="welcome-right">
            <h2> <span className="username">{user.name}</span></h2>
            <p><i className="fa-solid fa-envelope"></i> {user.email}</p>
            <p><i className="fa-solid fa-user-shield"></i> Role: {user.role}</p>
          </div>
        </div>
      )}

      <div className="table-container">
        <table className="loan-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Applied On</th>
              <th>Loan Amount</th>
              <th>Verifier Status</th>
            </tr>
          </thead>
          <tbody>
            {currentApps.map((app) => (
              <tr key={app._id}>
                <td>{app.username}</td>
                <td>
                  {new Date(app.createdAt).toLocaleDateString()} <br />
                  <small>{new Date(app.createdAt).toLocaleTimeString()}</small>
                </td>
                <td>₹{app.loanAmount}</td>
                <td>
                  <select
                    value={app.verifierStatus}
                    onChange={(e) => confirmStatusChange(app._id, e.target.value)}
                    className="fancy-select"
                  >
                    <option value="not-verified">⏳ Pending</option>
                    <option value="verified">✅ Approved</option>
                    <option value="rejected">❌ Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Confirm Status Change</h3>
            <p>Are you sure you want to change the status to <strong>{selectedStatus}</strong>?</p>
            <div className="popup-actions">
              <button className="confirm-btn" onClick={handleStatusChange}>Yes</button>
              <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  }

export default VerifierDashboard;
