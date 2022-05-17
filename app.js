const express = require('express');
require('dotenv').config({ path: 'config.env' });

// Routers

// Utils
const { db } = require('./utils/database');

const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoints 

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

