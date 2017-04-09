var express = require('express'),
	path = require('path'),
    favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    expressHbs = require('express-handlebars'),
    validator = require('express-validator');

var app = express();

// path to the router
var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',  expressHbs({defaultLayout: 'layout', extename: '.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// validation
app.use(validator());
app.use(cookieParser());

// static resources
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);

// set port
app.set('port', (process.env.PORT || 2225));

app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});