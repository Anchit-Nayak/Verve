const mongoose = require('mongoose');
// const defImage = '../assets/images.jpeg';

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['Programming', 'Web/App', 'Cloud And DevOps', 'AI/ML', 'Blockchain','Cyber Security', 'Interview Experience', 'Other'],
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    coverImage:{
        type: String,
        // default: defImage
    }
})

module.exports = mongoose.model('Post', postSchema);