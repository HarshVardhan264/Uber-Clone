const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { selectFields } = require('express-validator/lib/field-selection');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true, 
            minlength:[3, 'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            required: true, 
            minlength:[3, 'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    socketId:{
        type: String,
        default: null
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        model:{
            type: String,
            required: true,
            minlength: [3, 'Model must be at least 3 characters long'],
        },  
        plate:{
            type: String,
            required: true,
            unique: true,
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'bike', 'van', 'auto'],
            default: 'car'
        }
    },
    location:{
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    },
})

captainSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;