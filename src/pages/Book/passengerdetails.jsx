import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed and imported
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './PassengerDetails.css';

const PassengerDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    gender: "",
    email: "",
    age: "",
    scheduleId: "S999", // Example Schedule ID
    seatNumber: 27, // Example seat number
    fare: 1149, // Example fare
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.contactNumber || !formData.email) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      const passengerResponse = await axios.post("/api/add-passenger", {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        gender: formData.gender,
        email: formData.email,
        age: formData.age,
      });

      console.log("Passenger Added:", passengerResponse.data);

      // Generate Ticket
      const ticketResponse = await axios.post("/api/generate-ticket", {
        contactNumber: formData.contactNumber,
        scheduleId: formData.scheduleId,
        seatNumber: formData.seatNumber,
        fare: formData.fare,
      });

      alert(`Ticket booked successfully! PNR: ${ticketResponse.data.pnr}`);
    } catch (error) {
      console.error("Error booking ticket:", error);
      alert("Error booking ticket. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Passenger Details</h3>
      <Form>
        <Form.Group controlId="firstName" className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="middleName" className="mb-3">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            name="middleName"
            placeholder="Enter your middle name"
            value={formData.middleName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName" className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="gender" className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="M"
                checked={formData.gender === "M"}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="F"
                checked={formData.gender === "F"}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="age" className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="contactNumber" className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>Total Amount: ₹{formData.fare}</h5>
          <Button variant="danger" size="lg" onClick={handleSubmit} disabled={loading}>
            {loading ? "Processing..." : "PROCEED TO PAY"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PassengerDetails;
