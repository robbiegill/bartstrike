/**
 * Module dependencies.
 */

var config = require('./config.json')
  , express = require('express')
  , http = require('http')
  , fs = require('fs')
  , path = require('path')
  , routes = require('./routes')
  , ahh = require('./routes/ahh')
  , routeByMode = require('./routes/routeByMode');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || config.app.port || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.compress());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(function (err, req, res, next) {
    console.error('ERROR: ' + err);
    res.send(500, { err: 'something blew up' });
  });
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/ahh', ahh.ahh);
app.get('/:mode', routeByMode.routeByMode);

/* catch all non-api calls */
app.get(/^(?!\/api\/).*/, routes.index);

http.createServer(app).listen(app.set('port'));

module.exports = app;