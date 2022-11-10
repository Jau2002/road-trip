const { Country, Activity } = require('../config/db.config');

const attachinDb = async () => {
	const query = await Country.findAll({ includes: Activity });

	const insertDataDb = query?.map(
		({
			code,
			name,
			flag,
			continent,
			capital,
			subregion,
			area,
			population,
			activities,
		}) => ({
			code,
			name,
			flag,
			continent,
			capital,
			subregion,
			area,
			population,
			activities: activities?.map((activity) => activity),
		})
	);

	return insertDataDb;
};

module.exports = attachinDb;
