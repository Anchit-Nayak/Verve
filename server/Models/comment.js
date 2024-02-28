const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    epoch: {
        type: Number,
        required: true
    }
})

const Comment = mongoose.model('comment', commentSchema);

mongoose.exports = Comment;
