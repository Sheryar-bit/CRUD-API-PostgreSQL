const express = require ('express');
const { createUsers, updateUser, deleteUser, getAllUsers, getUserById } = require('../controller/usercontroller');
const router = express.Router();
const app = express();


router.post('/user', createUsers)
router.get('/user', getAllUsers)
router.get('/user/:id', getUserById)
router.put('/user/:id', updateUser)
router.delete('user/:id', deleteUser)

module.exports = router;