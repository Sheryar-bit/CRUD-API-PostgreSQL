const express = require('express');
const Client = require('pg')
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./src/config/db')
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async function(req, res) {
    console.log("Start");
    const result = await pool.query("SELECT current_database()");
    console.log("End");
    res.send(`The name of the Database is: ${result.rows[0].current_database}`)
    
})


//server Runnning
const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
