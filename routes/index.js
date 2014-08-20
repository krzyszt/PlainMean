
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PlainMean - a simple Mongo/Express/Angular/Node application' });
};