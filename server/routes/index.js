
/*
 * GET home page.
 */

var mongoose = require('mongoose');
// Getting Connection object
var db = mongoose.createConnection('localhost', 'plainmean');

exports.index = function(req, res){
    res.render('index', { title: 'PlainMean - a simple Mongo/Express/Angular/Node application' });
};

//exports.rest = function(req,res){
//   var path = decodeURI(req.url);
//   
//   var resource = path.get('model');
//   
//   // checking whether resoutce exists
//   
//   var config = require('../config');
//   
//   config.forEach(function(arg){
//      
//   });
//}