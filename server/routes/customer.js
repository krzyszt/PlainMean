
/*
 * GET customers listing.
 */

var customerModel = require('./../models/Customer');
var mongoose = require('mongoose');
//var CustomerModel = mongoose.model('Customers');

//JSON API for list of customers
exports.list = function(req,res){
   
      customerModel.customerlist(function(list){
         res.json(list);
         
      })
   
//     CustomerModel.find({}, function(error, list){
//         res.json(list);
//     });
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