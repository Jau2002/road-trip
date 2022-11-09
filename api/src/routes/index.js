const { Router } = require('express');
const monitoredRoute = require('./monitored.routes');
const countriesRoutes = require('./countries.routes');

const rootRoute = Router();

rootRoute.use('/health', monitoredRoute);

rootRoute.use('/countries', countriesRoutes);

module.exports = rootRoute;
