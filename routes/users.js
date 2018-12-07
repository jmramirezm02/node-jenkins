'use strict';

module.exports = app => {
  app.get('/', function (req, res, next) {
      res.status(200).json({ success: true });
  })
};