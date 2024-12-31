import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the PNR from the URL query parameters
  const searchParams = new URLSearchParams(location.search);
  const pnr = searchParams.get('pnr');
  const [ticketDetails, setTicketDetails] = useState(null);

  useEffect(() => {
    if (pnr) {
      // Simulate an API call to fetch ticket details using the PNR
      // You should replace this with an actual API call if needed
      const fetchTicketDetails = async () => {
        try {
          const response = await fetch(`/api/ticket-details?pnr=${pnr}`);
          const text = await response.text();  // Get response as text first
      
          console.log("Response text:", text);  // Log the raw response
      
          // Check if the response is valid JSON
          try {
            const data = JSON.parse(text);
            setTicketDetails(data);
          } catch (error) {
            console.error('Error parsing JSON:', error);
            console.error('Invalid JSON response:', text);
          }
      
        } catch (error) {
          console.error('Error fetching ticket details:', error);
        }
      };      
      fetchTicketDetails();
    }
  }, [pnr]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleViewDetails = () => {
    navigate(`/ticket-details?pnr=${pnr}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4">
            <Card.Body>
              <h2 className="text-center">Booking Confirmation</h2>
              {ticketDetails ? (
                <>
                  <p><strong>PNR:</strong> {pnr}</p>
                  <p><strong>Passenger Name:</strong> {ticketDetails.passengerName}</p>
                  <p><strong>Schedule:</strong> {ticketDetails.schedule}</p>
                  <p><strong>Seat Number:</strong> {ticketDetails.seatNumber}</p>
                  <p><strong>Fare:</strong> ₹{ticketDetails.fare}</p>
                  <p><strong>Contact:</strong> {ticketDetails.contactNumber}</p>
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" onClick={handleGoHome} className="mx-2">
                      Go to Homepage
                    </Button>
                    <Button variant="secondary" onClick={handleViewDetails}>
                      View Details
                    </Button>
                  </div>
                </>
              ) : (
                <p>Loading your ticket details...</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmationPage;
