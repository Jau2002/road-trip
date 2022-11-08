const { Router } = require('express');
const monitoredRoute = require('./monitoredRoute');

const rootRoute = Router();

rootRoute.use('/health', monitoredRoute);

module.exports = rootRoute;
