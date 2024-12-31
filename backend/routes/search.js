const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/search', async (req, res) => {
    const { source, destination, date } = req.query;

    try {
        const query = `
            SELECT 
                b.BusNumber, 
                s.ScheduleID, 
                r.Source, 
                r.Destination, 
                b.NumberOfSeats,
                (b.NumberOfSeats - COALESCE(COUNT(t.SeatNumber), 0)) AS seats_left,
                s.boardingdate,
                s.arrivaldate,
                r.Distance,
                (r.Distance * 2) AS Fare
            FROM 
                BUS b
            JOIN 
                SCHEDULE s ON b.BusID = s.BusID
            JOIN 
                ROUTE r ON s.RouteID = r.RouteID
            LEFT JOIN 
                TICKET t ON t.ScheduleID = s.ScheduleID
            WHERE 
                r.Source = $1 
                AND r.Destination = $2
                AND DATE(s.BoardingDate) = $3
            GROUP BY 
                b.BusNumber, s.ScheduleID, r.Source, r.Destination, b.NumberOfSeats, s.boardingdate, s.arrivaldate, r.Distance;
        `;

        const values = [source, destination, date];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
