const mongoose = require('mongoose')
const validator = require('validator')
// const defaultuser = '../assets/defuser.jpeg';

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, 'Please provide a valid email']
    },
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        // minlength: 8
    },
    photo:{
        type: String,
        // default: defUser
    },
    fullName: {
        type: String,
        required: true
    },
    otp: {
        value: String,
        epoch: Number,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false,
    },

})

const User = mongoose.model('user', userSchema);

module.exports = User;