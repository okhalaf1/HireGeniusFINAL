const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['employer', 'employee'] }
});

module.exports = mongoose.model('User', UserSchema);
