const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    like: Number,
    postName: String,
    tag: String,
    pic: String
});


module.exports = mongoose.model('Post', postSchema);