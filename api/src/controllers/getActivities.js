const { Activity } = require('../config/db.config');
const { OK, NOT_FOUND } = require('./protocols');

const getActivities = async (_, res) => {
	try {
		const query = await Activity.findAll({});
		return res.status(OK).send(query);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
};

module.exports = getActivities;
