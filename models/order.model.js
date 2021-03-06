const { DataTypes } = require('sequelize');

const { db } = require('../utils/database');

const Order = db.define('order', {
    id: {
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false,
        type: DataTypes.INTEGER
    },
    mealId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: 'active' // active, cancelled, completed
    }
})