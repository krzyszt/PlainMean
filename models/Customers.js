var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.CustomerSchema = new Schema({
    name: String,
    city: String
});
