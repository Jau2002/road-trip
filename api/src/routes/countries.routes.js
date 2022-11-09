const { Router } = require('express');
const getByQuery = require('../controllers/getByQuery');

const countriesRoutes = Router();

countriesRoutes.get('/', getByQuery);

module.exports = countriesRoutes;
