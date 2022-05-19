const bcrypt = require('bcrypt');
const { jwt } = require('jsonwebtoken');
const dotenv = require('dotenv');

// Models
const { User } = require('../models/user.model');
const { Order } = require('../models/order.model');

// Create user
const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json({
            newUser
        });
    } catch (err) {
        console.log(err);
    }
}

// Login 
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email, status: 'active' }});
        res.status(200).json({ user });
    } catch (err) {
        console.log(err);
    }
    // Compare password with db
    if (!user || !(await bcrypt.compare(password, user.password))) {
        console.log('Invalid Credentials')
    }
}

// Update user (PATCH)
const updateUser = async (req, res, next) => {
    try {
        const { user } = req;
        const { name } = req.body;
        const token = await jwt.sign({ id: user.id }, proces.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            await user.update({ name });
        res.status(200).json({ status: 'success' });
        }
    } catch (err) {
        console.log(err);
    }
}

// Delete user (DELETE)
const deleteUser = async (req, res, next) => {
    try {
        const { user } = req;
        await user.update({ status: 'inactive' });
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            res.status(200).json({ token, status: 'deleted' });
        }
    } catch (err) {
        console.log(err);
    }
}

// Get user's orders (GET)
const getOrders = async (req, res, next) => {
    try {
        const { id } = req.body;
        const orders = await Order.findAll({where: { userId: id }});
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            res.status(200).json({ token, orders });
        }
    } catch (err) {
        console.log(err);
    }
}

// Get an user's single order (GET)
const getOrder = async (req, res, next) => {
    try {
        const { id } = req.body;
        const order = await Order.findOne({ where: { id } });
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            res.status(200).json({ toke, order });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createUser,
    login,
    updateUser,
    deleteUser,
    getOrders,
    getOrder
}

