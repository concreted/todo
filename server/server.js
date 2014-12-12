var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

require('./config/config.js')(app, express);

app.use(express.static(path.join(__dirname, '../client')));
app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));

var port = process.env.PORT || 4568;
app.listen(port);

module.exports = app; // export app for testing
