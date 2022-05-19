const { jwt } = require('jsonwebtoken');

// Models 
const { Order } = require('../models/order.model');
const { User } = require('../models/user.model');

// Create order 
const createOrder = async (req, res) => {
    try {
        const { user } = req;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Error');
        } else {
            const newOrder = Order.create({ name, price, quantity });
            res.status(200).json({ status: 'success', totalDue: newOrder.price * newOrder.quantity });
        }
    } catch (err) {
        console.log(err);
    }
}

// Get all user orders 
const getAllOrders = async (req, res) => {
    try {
        const { user } = req;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Error');
        } else {
            const orders = Order.findAll();
            res.status(200).json({ status: 'success', orders });
        }
    } catch (err) {
        console.log(err);
    }
}

// Complete order 
const completeOrder = async (req, res) => {
    try {
        const { id } = req;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });    
        if (!token) {
            console.log('Not authorized');
        } else {
            const order = Order.findOne({ where: { id } });
            const updateOrder = order.update({ status: 'completed' });
            res.status(200).json({ status: 'success' });
        }
    } catch (err) {
        console.log(err);
    }
}

// Delete order 
const deleteOrder = async (req, res) => {
    try {
        const { id } = req;
        const token = await jwt.sign({ id: user.ud }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const order = Order.findOne({ where: { id } });
            const deleteOrder = order.update({ status: 'cancelled' });
            res.status(200).json({ status: 'success' });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    completeOrder,
    deleteOrder,
};

