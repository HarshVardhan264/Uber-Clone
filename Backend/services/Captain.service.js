const captainModel = require('../models/Captain.model');
const bcrypt = require('bcrypt');


module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, model, vehicleType
}) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !model || !vehicleType) {
        throw new Error('All fields are required');
    }
    const Captain = captainModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                model,
                vehicleType
            }
        });

        return Captain;
    
}   