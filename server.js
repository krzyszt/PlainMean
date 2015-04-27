
/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./server/models/db')
  , routes = require('./server/routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');
//  , restfullCtrl = require('restfull-ctrl');

// api routtes
var  user = require('./server/routes/user')
  , contact = require('./server/routes/contact')
  , customer = require('./server/routes/customer')
  , product = require('./server/routes/product');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// a directory that is used to store the uploaded images
app.set('images', __dirname + '/uploads/images');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.all('*', routes.rest);
app.get('/', routes.index);

app.get('/api/customer', customer.list);
app.get('/api/customer/:id', customer.item);
app.post('/api/customer', customer.create);
//app.get('/api/customer/populate', customer.populate);

app.get('/api/contact', contact.list);
app.post('/api/contact', contact.create);
app.get('/api/contact/:id', contact.item);
app.get('/api/populate', contact.populate);

app.get('/api/user', user.list);
app.post('/api/user', user.create);
app.get('/api/user/:id', user.item);

app.get('/api/product', product.list);
app.post('/api/product', product.create);
app.get('/api/product/:id', product.item);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
