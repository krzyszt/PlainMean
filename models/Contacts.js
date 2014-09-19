var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
});
