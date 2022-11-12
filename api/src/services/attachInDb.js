const { Country, Activity } = require('../config/db.config');

const attachinDb = async () => {
	const query = await Country.findOrCreate({
		includes: {
			model: Activity,
			attributes: ['id', 'name', 'difficulty', 'leaving', 'going', 'season'],
			through: {
				attributes: [],
			},
		},
	});
	return query;
};

module.exports = attachinDb;
