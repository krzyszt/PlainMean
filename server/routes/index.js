
/*
 * GET home page.
 */

var mongoose = require('mongoose');
// Getting Connection object
var db = mongoose.createConnection('localhost', 'plainmean');

exports.index = function(req, res){
    res.render('index', { title: 'PlainMean - a simple Mongo/Express/Angular/Node application' });
};