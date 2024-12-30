const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/')
const busRoutes = require('./routes/busRoutes');
const signupRoutets = require('./routes/signupRoutes')
app.use('/api/buses', busRoutes);

module.exports = app;
