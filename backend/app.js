const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const busRoutes = require('./routes/busRoutes');
app.use('/api/buses', busRoutes);

module.exports = app;
