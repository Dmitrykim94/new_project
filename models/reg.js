const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// entrySchema.statics.mostRecent = async function() {
//     return this.find().sort('createdAt').limit(5).exec();
// }

module.exports = mongoose.model('Reg', regSchema);