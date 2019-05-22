const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    tag: String,
    likes: Number,
});

module.exports = mongoose.model('Post', postSchema);