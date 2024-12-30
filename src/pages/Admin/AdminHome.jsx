import React from "react";
import { Link } from "react-router-dom";
import '../Admin/AdminStyles.css';

const AdminHome = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-header">Admin Panel</h1>
      <div className="admin-options">
        <Link to="/add-crew" className="admin-button">
          Add Crew
        </Link>
        <Link to="/add-route" className="admin-button">
          Add Route
        </Link>
        <Link to="/add-schedule" className="admin-button">
          Add Schedule
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
