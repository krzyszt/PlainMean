var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});
var ContactModel = module.exports = mongoose.model('Contacts', ContactSchema);
