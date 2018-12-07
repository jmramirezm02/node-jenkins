'use strict';
var path = require('path'),
    express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

module.exports = app => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(sassMiddleware({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'public'),
        indentedSyntax: true, // true = .sass and false = .scss
        sourceMap: true
    }));
    app.use(express.static(path.join(__dirname, 'public')));
};