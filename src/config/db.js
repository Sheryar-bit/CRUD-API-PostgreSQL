const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const pool = new Pool({
    host: process.env.db_HOST,
    user: process.env.db_USER,
    password: process.env.db_PASSWORD,
    database: process.env.db_NAME
})

//DB connection with PostgreSQL
pool.connect((err, client, release) => {
    if (err) {
        console.error("Error connecting to PostgreSQL database:", err);
    } else {
        console.log("Successfully connected to PostgreSQL database");  
    }
});

module.exports = pool;