const express = require('express');
require('dotenv').config({ path: 'config.env' });

// Routers
const { usersRouter } = require('./routes/users.router');
const { restaurantsRouter } = require('./routes/restaurants.router');
const { ordersRouter } = require('./routes/orders.router');
const { mealsRouter } = require('./routes/meals.router');

// Utils
const { db } = require('./utils/database');

const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/restaurants', restaurantsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/meals', mealsRouter);

// Authenticate DB Credentials
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err));

// Launch
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = { app };

