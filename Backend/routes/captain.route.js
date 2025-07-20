const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controllers');


router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.model').isLength({ min: 3 }).withMessage('Model must be at least 3 characters long'),
    body('vehicle.plate').matches(/^[A-Z0-9]{1,10}$/).withMessage('Please enter a valid vehicle plate number'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required')  
], 
    captainController.registerCaptain
)

module.exports = router;