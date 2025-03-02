const pool = require('../config/db');



const getAllUserService = async function () {
    const result = await pool.query("SELECT * FROM users")
    return result.rows;
} 

const getUserByIdService = async function (id) {
    const result = await pool.query("SELECT * FROM users where id = $1", [id])
    return result.rows[0];
}

const createUserService = async function (name, email) {
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email])
    return result.rows[0];
}

const updateUserService = async function (name, email, id) {
    const result = await pool.query("UPDATE users SET name=$1, email=$2 WHERE id = $3 RETURNING *", [name, email, id])
    return result.rows[0];
}

const deleteUserService = async function (id) {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id])
    return result.rows[0];
}


module.exports =getAllUserService;
module.exports =getUserByIdService;
module.exports =createUserService;
module.exports =updateUserService;
module.exports =deleteUserService;