#!/bin/env node

var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server = app.listen(port, ipaddr, function() {
    console.log('Listening on port %d', server.address().port);
});

/**
 * Generate manifest.json
 */
var manifest = {
    manifest: [
        'js/lib/entropy.js'
    ]
};

['other', 'component', 'entity', 'system', 'state'].forEach(function (dir) {
    manifest.manifest = manifest.manifest.concat(fs.readdirSync('./public/js/' + dir).map(function (file) {
        return 'js/' + dir + '/' + file;
    }));
});

fs.writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 4));