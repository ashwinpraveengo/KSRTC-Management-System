const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',     
    database: 'KSRTC', 
    password: 'dbms123',
    port: 5432,          
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err.message);
    } else {
        console.log('Connected to PostgreSQL');
    }
});

module.exports = pool;
