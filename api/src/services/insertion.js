const requestApi = require('./requestApi');
const { Country, Activity } = require('../config/db.config');

const insertion = async () => {
	const request = await requestApi();

	await Promise.all(
		request.map(async (c) => {
			await Country.findOrCreate({
				where: { code: c.code },
				defaults: {
					code: c.code,
					name: c.name,
					flag: c.flag,
					continent: c.continent,
					capital: c.capital,
					subregion: c.subregion,
					area: c.area,
					population: c.population,
				},
			});
		})
	);
	const query = await Country.findAll({ include: Activity });

	return query;
};

module.exports = insertion;
