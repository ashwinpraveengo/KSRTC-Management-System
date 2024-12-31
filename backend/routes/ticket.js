const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Fetch ticket details by PNR
router.get('/ticket-details', async (req, res) => {
    const { pnr } = req.query;
  
    if (!pnr) {
      return res.status(400).json({ error: 'PNR is required' });
    }
  
    try {
      // Query to get ticket details and passenger details using the contact number
      const ticketQuery = `
        SELECT t.pnrno, t.seatnumber, t.fare, t.contactnumber, t.scheduleid, p.firstname
        FROM ticket t
        LEFT JOIN passenger p ON t.contactnumber = p.contactnumber
        WHERE t.pnrno = $1
      `;
      const ticketResult = await pool.query(ticketQuery, [pnr]);
  
      if (ticketResult.rows.length === 0) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
  
      const ticket = ticketResult.rows[0];
      
      // Get schedule details using schedule ID from ticket
      const scheduleQuery = `SELECT * FROM schedule WHERE scheduleid = $1`;
      const scheduleResult = await pool.query(scheduleQuery, [ticket.scheduleid]);
  
      if (scheduleResult.rows.length === 0) {
        return res.status(404).json({ error: 'Schedule not found' });
      }
      const schedule = scheduleResult.rows[0];
  
      const ticketDetails = {
        passengerName: ticket.firstname || 'N/A',  // Handle case where passenger name is not found
        seatNumber: ticket.seatnumber,
        fare: ticket.fare,
        contactNumber: ticket.contactnumber,
        schedule: `${schedule.source} to ${schedule.destination} (Boarding: ${schedule.boardingdate}, Arrival: ${schedule.arrivaldate})`
      };
  
      console.log("Ticket details:", ticketDetails);  // Add this to log the response
  
      // Send the response with ticket and schedule details
      res.json(ticketDetails);  // Make sure this is sending proper JSON
    } catch (error) {
      console.error('Error fetching ticket details:', error);
      res.status(500).json({ error: 'Server error' });
    }
});
  

module.exports = router;
