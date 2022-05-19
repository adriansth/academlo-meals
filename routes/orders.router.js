const express = require('express');

// Controllers 
const {  
    createOrder,
    getAllOrders,
    completeOrder,
    deleteOrder
} = require('../controllers/order.controller');

const router = express.Router();

// Create order 
router.post('/', createOrder);

// Get Orders 
router.get('/me', getAllOrders);

// Complete order 
router.patch('/:id', completeOrder);

// Delete order 
router.delete('/id', deleteOrder);

module.exports = { ordersRouter: router };