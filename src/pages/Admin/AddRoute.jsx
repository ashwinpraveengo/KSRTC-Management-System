import React, { useState, useEffect } from "react";
import './RouteStyles.css'

const AddRoute = () => {
  const cities = [
    "Kochi",
    "Thiruvananthapuram",
    "Kozhikode",
    "Kannur",
    "Alappuzha",
    "Thrissur",
    "Palakkad",
    "Idukki",
    "Malappuram",
    "Kottayam",
    "Kasaragod",
    "Wayanad",
    "Pathanamthitta",
    "Ernakulam",
  ];

  const [formData, setFormData] = useState({
    RouteId: "",
    Source: "",
    Destination: "",
    Distance: "",
  });

  useEffect(() => {
    const generateRouteId = () => {
      const routeID = "R" + Math.floor(100 + Math.random() * 900); // Generates a route ID like R123
      setFormData((prevData) => ({
        ...prevData,
        RouteId: routeID,
      }));
    };
    generateRouteId();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Route Data Submitted:", formData);
    // Add logic to send data to the backend
  };

  return (
    <div className="add-route-container">
      <h1>Add New Route</h1>
      <form onSubmit={handleSubmit} className="add-route-form">
        <div className="form-group">
          <label htmlFor="RouteId">Route ID (Auto-Generated)</label>
          <input
            type="text"
            id="RouteId"
            name="RouteId"
            value={formData.RouteId}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="Source">Source</label>
          <select
            id="Source"
            name="Source"
            value={formData.Source}
            onChange={handleChange}
            required
          >
            <option value="">Select Source</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Destination">Destination</label>
          <select
            id="Destination"
            name="Destination"
            value={formData.Destination}
            onChange={handleChange}
            required
          >
            <option value="">Select Destination</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Distance">Distance (in km)</label>
          <input
            type="number"
            id="Distance"
            name="Distance"
            value={formData.Distance}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRoute;
