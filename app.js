/**
 * TNA API
 * v0.1.x
 * Jan 2013
 */
"use strict";
var express = require('express'),
    routes = require('./routes'),
    http = require('http');

var app = express();

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/simplebrowse', routes.simplebrowse);
app.get('/simplesearch', routes.simplesearch);
app.get('/integration', routes.integration);

var port = process.env.PORT || 8070;
var server = http.createServer(app).listen(port);
console.log("Express server listening on port %d in %s mode with node version", server.address().port, app.settings.env, process.version);
