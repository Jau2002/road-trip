const axios = require('axios');

const requestApi = async () => {
	const { data } = await axios.get('https://restcountries.com/v3/all');
	const response = data.map((c) => ({
		code: c.cca3,
		name: c.name.common,
		flag: c.flags[0],
		continent: c.continents[0],
		capital: c.capital ? c.capital[0] : null,
		subregion: c.subregion,
		area: c.area,
		population: c.population,
	}));
	return response;
};

module.exports = requestApi;
