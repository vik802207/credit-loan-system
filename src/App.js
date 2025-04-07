import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ApplicationLogin from "./pages/ApplicationLogin";
import Dashboard from "./pages/DashboradAdmin"
import ApplicationRegister from "./pages/ApplicationRegister";
import VerifierDashboard from "./pages/VerifierDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import AddAdmin from "./pages/AddAdmin";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addadmin" element={<AddAdmin />}/>
        <Route path ="/applicationLogin" element={<ApplicationLogin />} />
        <Route path ="/applicationRegister" element={<ApplicationRegister />} />
        <Route path ="/dashboard" element={<Dashboard />} />
        <Route path='/verifierdashboard' element={<VerifierDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
