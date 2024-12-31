const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

const searchRoutes = require('./routes/search');
const passengerRoutes = require('./routes/passenger');

app.use(cors());
app.use(express.json());
app.use('/api', searchRoutes);
app.use('/api', passengerRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
