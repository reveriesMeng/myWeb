var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');

var app = express();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("X-Powered-By",' 3.2.1')
  next();
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;
