const { Country, Activity } = require('../config/db.config');

const attachinDb = async () => {
	const query = await Country.findAll({ includes: Activity });

	const insertDataDb = query?.map((a) => ({
		code: a.code,
		name: a.name,
		flag: a.flag,
		continent: a.continent,
		capital: a.capital,
		subregion: a.subregion,
		area: a.area,
		population: a.population,
		activities: a?.map((activity) => activity),
	}));

	return insertDataDb;
};

module.exports = attachinDb;
