const express = require ('express');
const { createUsers, updateUser, deleteUser, getAllUsers, getUserById } = require('../controller/usercontroller');
const validateUser = require('../middleware/inputValidator');
const router = express.Router();
const app = express();


router.post('/user', validateUser, createUsers) //creating user
router.get('/user', getAllUsers) //getting user
router.get('/user/:id', getUserById) //getting user bu ID
router.put('/user/:id', validateUser,updateUser) //updating user by ID
router.delete('/user/:id', deleteUser) //deleting user by ID

module.exports = router;