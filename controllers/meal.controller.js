const { jwt } = require('jsonwebtoken');

// Models 
const { Meal } = require('../models/meal.model');

// Create meal
const createMeal = async (req, res, next) => {
    try {
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const newMeal = Meal.create({ name, price })
            res.status(200).json({status: 'success', newMeal});
        }
    } catch (err) {
        console.log(err);
    }
}

// Get all meals
const getMeals = async (req, res, next) => {
    try {
        const meals = await Meal.findAll();
        res.status(200).json({ meals });
    } catch (err) {
        console.log(err);
    }
}

// Get meal by id
const getMealById = async (req, res, next) => {
    try {
        const meal = await Meal.findOne({ where: { id } });
        res.status(200).json({ meal });
        res.status()
    } catch (err) {
        console.log(err);
    }
}

// Update meal
const updateMeal = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            const newMeal = await Meal.update({ name, price });
            res.status(200).json({status: 'success'});
        }
    } catch (err) {
        console.log(err);
    }
}

// Delete meal
const deleteMeal = async (req, res, next) => {
    try {
        const meal = await Meal.findOne({ where: { id } });
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        if (!token) {
            console.log('Not authorized');
        } else {
            await meal.update({ status: 'unavailable' });
            res.status(200).json({ status: 'deleted' });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { 
    createMeal,
    getMeals,
    getMealById,
    updateMeal,
    deleteMeal
}