const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    photo:{
        type: String
    },
    fullName: {
        type: String,
        required: true
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;