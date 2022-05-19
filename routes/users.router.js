const express = require('express');
const { body } = require('express-validator');

// Controllers 
const { 
    createUser,
    login,
    updateUser,
    deleteUser,
    getOrders,
    getOrder
 } = require('../controllers/user.controller');

 const router = express.Router();

// Create User 
router.post('/signup', createUser);

// Login 
router.post('/login', login);

// Update User 
router.patch('/:id', updateUser);

// Delete User 
router.delete('/:id', deleteUser);

// Get Orders
router.get('/orders', getOrders);

// Get Order 
router.get('/orders/:id', getOrder);

module.exports = { usersRouter: router };