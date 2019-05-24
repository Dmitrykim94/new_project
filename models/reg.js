const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Reg', regSchema);