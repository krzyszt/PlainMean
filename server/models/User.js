var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});
var UserModel = module.exports = mongoose.model('Users', UserSchema);
