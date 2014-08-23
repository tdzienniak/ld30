#!/bin/env node

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server = app.listen(port, ipaddr, function() {
    console.log('Listening on port %d', server.address().port);
});