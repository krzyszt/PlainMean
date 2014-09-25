var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: String,
    city: String
});
var CustomerModel = mongoose.model('Customers', CustomerSchema);

exports.customerlist = function(callback){
   CustomerModel.find({}, function(err, list){
         if (err) {
            console.log(err);
         } else {
            callback(list);
         }
   });
};

exports.create = function(item, callback){ 
   var customer = new CustomerModel(item);
   customer.save(function(err,doc){
      if (err) {
         console.log(err);
      } else {
         callback('', doc);
      }
   });
};

exports.item = function(id, callback) {
   CustomerModel.findById(id, function(err, item){
      if (err) {
         console.log(err);
      } else {
         callback('', item);
      }
      
   });
}