const express = require('express');
const router = express.Router();
const pool = require('../config/db'); 

const generatePNR = () => {
    return Math.floor(Math.random() * 1000000000);  
};

router.post('/add-passenger', async (req, res) => {
    const { firstName, middleName, lastName, contactNumber, gender, email, age } = req.body;
    try {
        await pool.query(
            'INSERT INTO PASSENGER (FirstName, MiddleName, LastName, ContactNumber, Gender, Email, Age) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [firstName, middleName, lastName, contactNumber, gender, email, age]
        );
        res.status(201).json({ message: 'Passenger added successfully' });
    } catch (error) {
        console.error('Error adding passenger:', error); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/generate-ticket', async (req, res) => {
    const { contactNumber, scheduleId, seatNumber, fare } = req.body;

    try {

        const seatCheck = await pool.query(
            'SELECT COUNT(*) FROM TICKET WHERE ScheduleID = $1 AND SeatNumber = $2',
            [scheduleId, seatNumber]
        );

        if (parseInt(seatCheck.rows[0].count) > 0) {
            return res.status(400).json({ message: 'Seat is already booked' });
        }

        const pnrNo = generatePNR();

        const ticket = await pool.query(
            'INSERT INTO TICKET (PNRNO, ContactNumber, ScheduleID, SeatNumber, Fare) VALUES ($1, $2, $3, $4, $5) RETURNING PNRNO',
            [pnrNo, contactNumber, scheduleId, seatNumber, fare]
        );

        res.status(201).json({
            message: 'Ticket generated successfully',
            pnr: ticket.rows[0].pnrno,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error generating ticket: ' + error.message });
    }
});

module.exports = router;