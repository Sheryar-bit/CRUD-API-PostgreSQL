// const { user } = require("pg/lib/defaults");
const { createUserService, deleteUserService, getUserByIdService, updateUserService, getAllUserService } = require('../models/UserModel')

const handleResponse = function(res, status, message,data = null){
    res.status(status).json({
        status: status,
        message: message,
        data: data
    });
};

//Cretaing a new user
const createUsers = async function (req, res, next) {
    const { name, email} = req.body;
    try {
        const newUser = await createUserService(name, email)
        handleResponse(res, 200, 'User Created', newUser)
    } catch (error) {
        console.log("erro creating the user", error)
    }
};

//getting all user
const getAllUsers = async function (req, res, next) {
    
    try {
        const users = await getAllUserService();
        handleResponse(res, 200, 'User ferched', users)
    } catch (error) {
        console.log("error", error)
    }
};

//getting user by ID
const getUserById = async function (req, res, next) {
    const { name, email} = req.body;
    try {
        const newUser = await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res, 404, "user Not found",)
        handleResponse(res, 200, 'User found', newUser)
    } catch (error) {
        console.log("error", error)
    }
};


const updateUser = async function (req, res, next) {
    const { name, email} = req.body;
    try {
        const updatedUser = await updateUserService(req.params.id);
        if(!user) return handleResponse(res, 404, "user Not found",)
        handleResponse(res, 200, 'User updated succesfullt', updatedUser)
    } catch (error) {
        console.log("error", error)
    }
};

const deleteUser = async function (req, res, next) {
    try {
        const userdeleted = await deleteUserService(req.params.id);
        if(!user) return handleResponse(res, 404, "user Not found",)
        handleResponse(res, 200, 'User deleted succesfullt', userdeleted)
    } catch (error) {
        console.log("error", error)
    }
};



module.exports = {
    createUsers,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
