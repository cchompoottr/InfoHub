// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    birthDay: { type: Number },
    birthMonth: { type: Number },
    birthYear: { type: Number },
    gender: { type: String },
    
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
