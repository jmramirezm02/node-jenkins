const express = require('express');
const app = express();
require('./server/express')(app);
// routes
require('./routes/users')(app);
// this should be the last route
require('./routes/index')(app);

module.exports = app;
