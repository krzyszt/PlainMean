var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
});
