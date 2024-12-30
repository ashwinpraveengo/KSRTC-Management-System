import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './PassengerDetails.css';

const PassengerDetails = () => {
  const [gender, setGender] = useState("");

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Passenger Details</h3>
          <div className="mb-4">
        <h5>
          <i className="bi bi-person-circle"></i> Passenger Information
        </h5>
        <Form>
          <Form.Group controlId="passengerName" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your First name" />
          </Form.Group>

          <Form.Group controlId="passengerName" className="mb-3">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Middle name" />
          </Form.Group>

          <Form.Group controlId="passengerName" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Last name" />
          </Form.Group>

          <Form.Group controlId="passengerGender" className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="passengerAge" className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
          </Form.Group>


        </Form>
      </div>

      <div className="mb-4">
        <h5>
          <i className="bi bi-envelope"></i> Contact Details
        </h5>
        <p>Your ticket will be sent to these details</p>
        <Form>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="phone" className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Row>
              <Col xs={3}>
                <Form.Control as="select" defaultValue="+91">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
     
      <div className="mb-4">
        <small>
          By clicking on proceed, I agree that I have read and understood the{" "}
          <span className="text-primary">TnCs</span> and the{" "}
          <span className="text-primary">Privacy Policy</span>.
        </small>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Total Amount: ₹1149.00</h5>
        <Button variant="danger" size="lg">
          PROCEED TO PAY
        </Button>
      </div>
    </div>
  );
};

export default PassengerDetails;
