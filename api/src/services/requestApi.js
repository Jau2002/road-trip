const axios = require('axios');

const requestApi = async () => {
	const { data } = await axios.get('https://restcountries.com/v3/all');

	const response = data.map(
		({
			cca3,
			name,
			flags,
			continents,
			capital,
			subregion,
			area,
			population,
		}) => ({
			code: cca3,
			name: name.common,
			flag: flags[0],
			continent: continents[0],
			capital: capital ? capital[0] : null,
			subregion,
			area,
			population,
		})
	);

	return response;
};

module.exports = requestApi;
