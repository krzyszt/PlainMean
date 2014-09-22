
/*
 * GET customers listing.
 */

var mongoose = require('mongoose');
// Getting Connection object
var db = mongoose.createConnection('localhost', 'plainmean');
var CustomerSchema = require('../../server/models/Customers.js').CustomerSchema;
var CustomerModel = db.model('customer', CustomerSchema);

//JSON API for list of customers
exports.list = function(req,res){
     CustomerModel.find({}, function(error, list){
         res.json(list);
     });
 };

 //JSON API for getting a single customer
 exports.item = function(req,res){
     var id = req.params.id;
     CustomerModel.findById(id, function(error, item){
        if(item){
            res.json(item);
        } else {
            res.json({error: true});
        } 
     });
 };

//JSON API for creating a new customer
exports.create = function(req,res){
   var reqBody = req.body,
       customerObj = {name: reqBody.name, city: reqBody.city};
   var customer = new CustomerModel(customerObj);
   customer.save(function(err,doc){
      if(err || !doc){
//          throw 'Error';
            console.log('error');
      } else {
          res.json(doc);
      }
    });
};