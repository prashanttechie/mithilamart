var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, index: true },
    name: String,
    password: String,
    gender: String,
    role: String,
    address:String,
    emailId:String,
    mobileNumber:String
});

module.exports = mongoose.model('user', userSchema);