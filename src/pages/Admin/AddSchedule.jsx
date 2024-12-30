import React, { useState, useEffect } from "react";
import './ScheduleStyles.css';

const AddSchedule = () => {
  const [formData, setFormData] = useState({
    ScheduleID: "",
    RouteID: "",
    BusID: "",
    BoardingDate: "",
    ArrivalDate: "",
  });

  useEffect(() => {
    const generateScheduleId = () => {
      const scheduleID = "S" + Math.floor(1000 + Math.random() * 9000); // Generates a schedule ID like S1234
      setFormData((prevData) => ({
        ...prevData,
        ScheduleID: scheduleID,
      }));
    };
    generateScheduleId();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Schedule Data Submitted:", formData);
    // Add logic to send data to the backend
  };

  return (
    <div className="add-schedule-container">
      <h1>Add New Schedule</h1>
      <form onSubmit={handleSubmit} className="add-schedule-form">
        <div className="form-group">
          <label htmlFor="ScheduleID">Schedule ID (Auto-Generated)</label>
          <input
            type="text"
            id="ScheduleID"
            name="ScheduleID"
            value={formData.ScheduleID}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="RouteID">Route ID</label>
          <input
            type="text"
            id="RouteID"
            name="RouteID"
            value={formData.RouteID}
            onChange={handleChange}
            placeholder="Enter Route ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="BusID">Bus ID</label>
          <input
            type="text"
            id="BusID"
            name="BusID"
            value={formData.BusID}
            onChange={handleChange}
            placeholder="Enter Bus ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="BoardingDate">Boarding Date</label>
          <input
            type="date"
            id="BoardingDate"
            name="BoardingDate"
            value={formData.BoardingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ArrivalDate">Arrival Date</label>
          <input
            type="date"
            id="ArrivalDate"
            name="ArrivalDate"
            value={formData.ArrivalDate}
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

export default AddSchedule;
