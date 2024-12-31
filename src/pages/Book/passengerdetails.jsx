import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import "./PassengerDetails.css";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get("source");
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");
  const fare = searchParams.get("fare");
  const seatsLeft = parseInt(searchParams.get("seats_left"));
  const scheduleId = searchParams.get("schedule_id");

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    gender: "",
    email: "",
    age: "",
    scheduleId: scheduleId,
    seatNumber: "",
    fare: fare,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [availableSeats, setAvailableSeats] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  useEffect(() => {
    const fetchAvailableSeats = async () => {
      try {
        const response = await axios.get(`/api/get-available-seats?schedule_id=${scheduleId}`);
        if (response.data) {
          setAvailableSeats(response.data);
        }
      } catch (error) {
        console.error("Error fetching available seats:", error);
      }
    };

    if (scheduleId) {
      fetchAvailableSeats();
    }
  }, [scheduleId]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contactNumber)) newErrors.contactNumber = "Contact number must be 10 digits.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.age.trim()) newErrors.age = "Age is required.";
    else if (parseInt(formData.age) <= 0 || parseInt(formData.age) > 120) newErrors.age = "Age must be between 1 and 120.";

    if (!formData.seatNumber) newErrors.seatNumber = "Please select a seat number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
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

      const ticketResponse = await axios.post("/api/generate-ticket", {
        contactNumber: formData.contactNumber,
        scheduleId: formData.scheduleId,
        seatNumber: formData.seatNumber,
        fare: formData.fare,
      });

      alert(`Ticket booked successfully! PNR: ${ticketResponse.data.pnr}`);

      navigate(`/confirmation?pnr=${ticketResponse.data.pnr}`);
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
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
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
                isInvalid={!!errors.gender}
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
                isInvalid={!!errors.gender}
              />
            </Col>
          </Row>
          <div className="invalid-feedback">{errors.gender}</div>
        </Form.Group>
        <Form.Group controlId="age" className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="contactNumber" className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            isInvalid={!!errors.contactNumber}
          />
          <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="seatNumber" className="mb-3">
          <Form.Label>Select Seat Number</Form.Label>
          <Form.Control
            as="select"
            name="seatNumber"
            value={formData.seatNumber}
            onChange={handleChange}
            isInvalid={!!errors.seatNumber}
          >
            <option value="">Choose a seat</option>
            {availableSeats.map((seat) => (
              <option key={seat} value={seat}>
                Seat {seat}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">{errors.seatNumber}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>Total Amount: ₹{formData.fare}</h5>
          <h6>Seat Available: {seatsLeft}</h6>
          <Button variant="danger" size="lg" onClick={handleSubmit} disabled={loading}>
            {loading ? "Processing..." : "PROCEED TO PAY"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PassengerDetails;
