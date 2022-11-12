const { Router } = require('express');
const monitoredRoute = require('./monitored.routes');
const countriesRoutes = require('./countries.routes');
const activitiesRoutes = require('./activities.routes');

const rootRoute = Router();

rootRoute.use('/health', monitoredRoute);

rootRoute.use('/countries', countriesRoutes);

rootRoute.use('/activities', activitiesRoutes);

module.exports = rootRoute;
