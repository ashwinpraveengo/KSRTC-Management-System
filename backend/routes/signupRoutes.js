// const express = require('express');
// const pool = require('./db'); // Ensure this points to your db.js file
// const app = express();

// app.use(express.json()); // For parsing JSON request bodies

// // Create user API endpoint
// app.post('/api/create-user', async (req, res) => {
//   const { email, username, password } = req.body;
//   if (!email || !username || !password) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }
//   try {
//     const result = await pool.query(
//       'INSERT INTO Users (email, username, password) VALUES ($1, $2, $3) RETURNING *',
//       [email, username, password]
//     );
//     res.status(201).json({ message: 'User created successfully.', user: result.rows[0] });
//   } catch (err) {
//     console.error('Error inserting user:', err);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// // Server start
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
