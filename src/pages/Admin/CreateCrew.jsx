import React, { useState, useEffect } from "react";
import './CrewStyles.css';

const CreateCrew = () => {
  const [formData, setFormData] = useState({
    CrewID: "",
    Rolex: "Driver",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    ContactNumber: "",
    LicenceNumber: "",
    Experience: "",
  });

  useEffect(() => {
    const generateCrewID = () => {
      const crewID = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
      setFormData((prevData) => ({
        ...prevData,
        CrewID: crewID.toString(),
      }));
    };
    generateCrewID();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Crew Data Submitted:", formData);
  };

  return (
    <div className="create-crew-container">
      <h1>Create New Crew</h1>
      <form onSubmit={handleSubmit} className="create-crew-form">
        <div className="form-group">
          <label htmlFor="CrewID">Crew ID</label>
          <input
            type="text"
            id="CrewID"
            name="CrewID"
            value={formData.CrewID}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="Rolex">Role</label>
          <select
            id="Rolex"
            name="Rolex"
            value={formData.Rolex}
            onChange={handleChange}
            required
          >
            <option value="Driver">Driver</option>
            <option value="Conductor">Conductor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="MiddleName">Middle Name</label>
          <input
            type="text"
            id="MiddleName"
            name="MiddleName"
            value={formData.MiddleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ContactNumber">Contact Number</label>
          <input
            type="tel"
            id="ContactNumber"
            name="ContactNumber"
            value={formData.ContactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="LicenceNumber">Licence Number</label>
          <input
            type="text"
            id="LicenceNumber"
            name="LicenceNumber"
            value={formData.LicenceNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Experience">Experience (Years)</label>
          <input
            type="number"
            id="Experience"
            name="Experience"
            value={formData.Experience}
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

export default CreateCrew;
