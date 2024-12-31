const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// 1
router.get('/groupBy', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT BusType, SUM(NumberOfSeats) AS TotalSeats
        FROM Bus
        GROUP BY BusType
        HAVING SUM(NumberOfSeats) > 60;
        `
        ;

        const values = [BusType, TotalSeats];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//2
router.get('/orderBy', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        select FirstName, ContactNumber, Age from passenger order by FirstName;
        `
        ;

        const values = [FirstName, ContactNumber, Age];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//3
router.get('/join', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT Ticket.PNRNO, Ticket.SeatNumber, Ticket.Fare, Bus.BusNumber, Bus.BusType, Passenger.FirstName, Passenger.LastName
        FROM Ticket
        JOIN Schedule ON Ticket.ScheduleID = Schedule.ScheduleID
        JOIN Bus ON Schedule.BusID = Bus.BusID
        JOIN Passenger ON Ticket.ContactNumber = Passenger.ContactNumber;
        `
        ;

        const values = [pnrNo, seatNo, fare, busNo, busType, passengerFName, passengerLName];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//3
router.get('/outerJoin', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT Ticket.PNRNO, Ticket.SeatNumber, Ticket.Fare, Bus.BusNumber, Bus.BusType, Passenger.FirstName, Passenger.LastName
        FROM Ticket
        LEFT OUTER JOIN Schedule ON Ticket.ScheduleID = Schedule.ScheduleID
        LEFT OUTER JOIN Bus ON Schedule.BusID = Bus.BusID
        LEFT OUTER JOIN Passenger ON Ticket.ContactNumber = Passenger.ContactNumber;
        `
        ;

        const values = [pnrNo, seatNo, fare, busNo, busType, passengerFName, passengerLName];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//4
router.get('/boolean', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT Bus.BusType, SUM(Bus.NumberOfSeats) AS TotalSeats
        FROM Bus
        GROUP BY Bus.BusType
        HAVING SUM(Bus.NumberOfSeats) > 60
        AND (Bus.BusType = 'Super Fast' OR Bus.BusType = 'Swift');
        `
        ;

        const values = [busType, totalSeats];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//5
router.get('/arithmetic', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT Bus.BusType, SUM(Bus.NumberOfSeats) AS TotalSeats
        FROM Bus
        GROUP BY Bus.BusType
        HAVING SUM(Bus.NumberOfSeats) * 1.1 > 80;
        `
        ;

        const values = [busType, totalSeats];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//6
router.get('/string', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        select RouteID, Source from Route where Source like 'K%';
        `
        ;

        const values = [routeID, source];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//7
router.get('/to_char', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT ScheduleID, 
        TO_CHAR(BoardingDate, 'YYYY-MM-DD HH24:MI:SS') 
        AS BoardingDate
        FROM Schedule;
        `
        ;

        const values = [scheduleID, boardingDate];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//7
router.get('/extract', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT ScheduleID,
        EXTRACT(YEAR FROM BoardingDate) AS Year,
        EXTRACT(MONTH FROM BoardingDate) AS Month
        FROM 
        Schedule;
        `
        ;

        const values = [scheduleID, year, month];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//8
router.get('/between', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        select pnrno, seatNumber, fare from ticket where fare between 500 and 1000;
        `
        ;

        const values = [pnr, seatNo, fare];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//9
router.get('/set', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT B.BusID FROM Bus B
        EXCEPT
        SELECT BusID FROM Schedule S;
        `
        ;

        const values = [busID];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//10
router.get('/exists', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = 
        `
        SELECT BusID, BusType
        FROM Bus B
        WHERE EXISTS (
            SELECT 1
            FROM Schedule S
            WHERE S.BusID = B.BusID
        );
        `
        ;

        const values = [busID, busType];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;