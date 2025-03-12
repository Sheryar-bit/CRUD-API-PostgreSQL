const express = require('express');
const Client = require('pg')
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./src/Routes/UserRoutes')
const errorHandling = require('./src/middleware/errorHandler')
const pool = require('./src/config/db');
const { required } = require('joi');
const CreateUserTable = require('./src/data/CreateUserTable')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//Create table before starting the server:
CreateUserTable();

//Routes:
app.use("/api", userRoutes)

//error handeling middlewrae:
app.use(errorHandling);

app.get('/', async function (req, res) {
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`The name of the Database is: ${result.rows[0].current_database}`);
    } catch (error) {
        console.log("error", error);
        // res.status(500).json({ message: "Internal Server Error" });
    }
});



//server Runnning
const PORT = 5000
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
