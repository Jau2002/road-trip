const { Router } = require('express');
const postByBody = require('../controllers/postByBody');
const getActivities = require('../controllers/getActivities');

const activitiesRoutes = Router();

activitiesRoutes.get('/', getActivities);

activitiesRoutes.post('/', postByBody);

module.exports = activitiesRoutes;
