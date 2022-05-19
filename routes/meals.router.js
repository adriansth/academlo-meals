const express = require('express');

// Controllers 
const {  
    createMeal,
    getMeals, 
    getMealById,
    updateMeal, 
    deleteMeal
} = require('../controllers/meal.controller');

const router = express.Router();

// Create meal 
router.post('/:id', createMeal);

// Get Meals 
router.get('/', getMeals);

// Get meal by id
router.get('/:id', getMealById);

// Update meal
router.patch('/:id', updateMeal);

// Delete meal
router.delete('/:id', deleteMeal);

module.exports = { mealsRouter: router };