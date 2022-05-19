const express = require('express');

// Controllers 
const {
    createRestaurant,
    getRestaurantById,
    getRestaurants,
    updateRestaurant,
    deleteRestaurant,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/restaurant.controller');

const router = express.Router();

// Create Restaurant
router.post('/', createRestaurant);

// Get Restaurant by id
router.get('/', getRestaurants);

// Get all restaurants 
router.get('/:id', getRestaurantById);

// Update restaurant 
router.patch('/:id', updateRestaurant);

// Delete restaurant 
router.delete('/:id', deleteRestaurant);

// Create review
router.post('/reviews/:id', createReview);

// Update review 
router.patch('/reviews/:id', updateReview);

// Delete review 
router.delete('/reviews/:id', deleteReview);

module.exports = { restaurantsRouter: router };
