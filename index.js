require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');  // Make sure to import passport here
const app = express();
const useRoutes = require('./routes/userRoute'); // Import routes

// Serve static files
app.use(express.static('public'));

// Set up session
app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set true if using HTTPS
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Initialize passport configuration
require('./config/passport');  // Ensure this is included here

// Routes
app.use('/', useRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
