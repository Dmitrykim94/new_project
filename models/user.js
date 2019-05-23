const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    tagArray: Array,
    preferences: Array,
})

module.exports = mongoose.model('User', userSchema);