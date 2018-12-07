'use strict';
const path = require('path');
const rootPath = path.normalize(__dirname + '/../');

module.exports = app => {
    app.get('/', function(req, res, next) {
         res.sendFile(rootPath + 'public/index.html');
    });
};