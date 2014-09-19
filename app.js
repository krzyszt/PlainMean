
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , contact = require('./routes/contact')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
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

app.get('/', routes.index);
app.get('/customer', routes.list);
app.get('/customer/:id', routes.item);
app.post('/customer', routes.create);
app.get('/users', user.list);
app.get('/contact', contact.list);
app.get('/contact/populate', contact.populate);
app.post('/contact', contact.create);
app.get('/contact/:id', contact.item);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
