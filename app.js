const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // as both backend and static(frontend are using different port)
const app = express();

// Middleware
app.use(cors()); // Enable CORS to handle different domains
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connecting to DB
require("./db/conn");

// For starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Routes
const users = require('./routes/users');
app.use('/api/users', users);
