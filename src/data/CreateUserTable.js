const pool = require ('../config/db');

const CreateUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    Age INT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `

    try {
        pool.query(queryText);
        console.log("user table Createf");
        
    } catch (error) {
        console.log("Table not creted", error);
        
    }
}

module.exports = CreateUserTable;