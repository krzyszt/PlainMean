
/*
 * GET products listing.
 */

var productModel = require('./../models/Product');
var mongoose = require('mongoose');

//JSON API for list of products
exports.list = function(req,res){
      productModel.productlist(function(list){
         res.json(list);
      });
 };

 //JSON API for getting a single product
 exports.item = function(req,res){
     var id = req.params.id;
     productModel.item(id, function(err,item){
        if (err || !item) {
           res.json({error: true});
        } else {
           res.json(item);
        }
     });
 };

//JSON API for creating a new product
exports.create = function(req,res){
   var reqBody = req.body,
       productObj = {
          name: reqBody.name, 
          code: reqBody.code,
          type: reqBody.type,
          description: reqBody.description
   };
       productModel.create(productObj, function(err, doc){
         if(err || !doc){
            console.log('error');
         } else {
            res.json(doc);
         }
       });
};