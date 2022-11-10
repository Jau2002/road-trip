const { Router } = require('express');
const getByQuery = require('../controllers/getByQuery');
const getByParam = require('../controllers/getByParam');

const countriesRoutes = Router();

countriesRoutes.get('/', getByQuery);

countriesRoutes.get('/:code', getByParam);

module.exports = countriesRoutes;
