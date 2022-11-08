const { Router } = require('express');
const getHealth = require('../controllers/getHealth');

const monitoredRoute = Router();

monitoredRoute.get('/', getHealth);

module.exports = monitoredRoute;
