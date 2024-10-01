// routes/userRoute.js
const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController');

// Google OAuth authentication
router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

// Google OAuth callback
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/Home',
    failureRedirect: '/failure'
}));

// Success page
router.get('/Home', userController.success);

// Logout
router.get('/logout', userController.logout);

// Failure page
router.get('/failure', userController.failure);

// Load Auth Page
router.get('/', userController.loadAuth);

module.exports = router;
