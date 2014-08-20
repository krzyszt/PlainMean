
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Plain Mean - a simple Mongo/Express/Angular/Node application' });
};