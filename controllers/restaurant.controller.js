const { jwt } = require('jsonwebtoken');

// Models 
const { Meal, Restaurant } = require('../models/restaurant.model');
const { Review } = require('../models/review.model');  

// Create restaurant
const createRestaurant = async (req, res) => {
    try {
        const { user } = req;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const newRes = Restaurant.create({ name, adress });
            res.status(200).json({ newRes, status: 'successs' });
        }
    } catch (err) {
        console.log(err);
    }
}

// Get all restaurants 
const getRestaurants = async (req, res) => {
    try {
        const restaurants = Restaurant.findAll();
        res.status(200).json({ restaurants });
    } catch (err) {
        console.log(err);
    }
}

// Get restaurant by id
const getRestaurantById = async (req, res) => {
    try {
        const { id } = req.body;
        const restaurant = Restaurant.findOne({ where: { id } });
        res.status(200).json({ status: 'success', restaurant });
    } catch (err) { 
        console.log(err);
    }
}

// Update restaurant 
const updateRestaurant = async (req, res) => {
    try {
        const { id, name, adress } = req.body;
        const restaurant = Restaurant.findOne({ where: { id } });
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const newRes = restaurant.update({ name, adress });
            res.status(200).json({ status: 'successs', newRes })  
        }
    } catch (err) {
        console.log(err);
    }
}

// Delete restaurant 
const deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.body;
        const restaurant = Restaurant.findOne({ where: { id } });
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const deleteRes = restaurant.update({ status: 'closed' });
            res.status(200).json({ status: 'deleted' }); 
        }
    } catch (err) {
        console.log(err);
    }
}

// Create review 
const createReview = async (req, res) => {
    try {
        const { id } = req.body
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const newReview = Review.create({ comment, rating, restaurantId: id });  
            res.status(200).json({ status: 'success' });
        }
    } catch (err) {
        console.log(err);
    }
}

// Update review 
const updateReview = async (req, res) => {
    try {
        const { id } = req.body;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
           console.log('Not Authorized'); 
        } else {
            const review = Review.update({ comment, rating });
            res.status(200).json({ status: 'success' });
        }
    } catch (err) {
        console.log(err);
    }
}

// Delete review
const deleteReview = async (req, res) => {
    try {
        const { id } = req.body;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const review = Review.delete({ where: { id } });
            res.status(200).json({ status: 'success' });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createRestaurant,
    getRestaurantById, 
    getRestaurants,
    updateRestaurant,
    deleteRestaurant,
    createReview,
    updateReview,
    deleteReview
};