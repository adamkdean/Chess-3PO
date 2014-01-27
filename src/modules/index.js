var _ = require('underscore'),
    fs = require('fs'),
    path = require('path');

fs.readdirSync(__dirname).forEach(function (file) {
    if (file === 'index.js') return;

    var mod = {};
    mod[path.basename(file, '.js')] = require(path.join(__dirname, file));
    
    _.extend(module.exports, mod);
});