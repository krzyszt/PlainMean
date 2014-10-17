
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
      });
 };

 //JSON API for getting a single customer
 exports.item = function(req,res){
     var id = req.params.id;
     customerModel.item(id, function(err,item){
        if (err || !item) {
           res.json({error: true});
        } else {
           res.json(item);
        }
     });
 };

//JSON API for creating a new customer
exports.create = function(req,res){
   var reqBody = req.body,
       customerObj = {
          name: reqBody.name, 
          city: reqBody.city,
          status: reqBody.status,
          type: reqBody.type,
          description: reqBody.description
   };
       customerModel.create(customerObj, function(err, doc){
         if(err || !doc){
            console.log('error');
         } else {
            res.json(doc);
         }
       });
};