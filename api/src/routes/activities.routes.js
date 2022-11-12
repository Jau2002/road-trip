const { Router } = require('express');
const postByBody = require('../controllers/postByBody');

const activitiesRoutes = Router();

activitiesRoutes.post('/', postByBody);

module.exports = activitiesRoutes;
