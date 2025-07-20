const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');
const BlacklistToken = require('../models/blacklistToken.model');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    

    const { fullname, email, password } = req.body;
    
    const isUserExists = await userModel.findOne({ email });    
    if (isUserExists) {
        return res.status(400).json({ message: 'User with this email already exists' });
    }

    
    const hashedPassword = await userModel.hashPassword(password);
    
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,  
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({
        token,user,
        message: 'User registered successfully',
    });
}

module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({email}).select('+password');
    
    if (!user ) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({
        token, user,
        message: 'User logged in successfully',
    });
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);

}

module.exports.logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({ token });

}