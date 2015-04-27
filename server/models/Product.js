var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: String,
    code: String,
    type: String,
    description: String
});
var ProductModel = mongoose.model('Products', ProductSchema);

exports.productlist = function(callback){
   ProductModel.find({}, function(err, list){
         if (err) {
            console.log(err);
         } else {
            callback(list);
         }
   });
};

exports.create = function(item, callback){ 
   var product = new ProductModel(item);
   product.save(function(err,doc){
      if (err) {
         console.log(err);
      } else {
         callback('', doc);
      }
   });
};

exports.item = function(id, callback) {
   ProductModel.findById(id, function(err, item){
      if (err) {
         console.log(err);
      } else {
         callback('', item);
      }
      
   });
};