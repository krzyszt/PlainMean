var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: String,
    city: String
});


exports.customerlist = function(callback){
   var CustomerModel = mongoose.model('Customers', CustomerSchema);
   CustomerModel.find({}, function(err, list){
         if (err) {
            console.log(err);
         } else {
            callback(list);
         }
   });
}