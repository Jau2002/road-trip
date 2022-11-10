const insertion = require('../utils/insertion');
const { OK, NOT_FOUND, CONFLICT } = require('./protocols');

const getByQuery = async (req, res) => {
	const allCountries = await insertion();
	const { name } = req.query;
	try {
		if (name) {
			const filterForName = allCountries.filter((c) =>
				c.name.toUpperCase().includes(name.toUpperCase())
			);

			return filterForName.length
				? res.status(OK).send(filterForName)
				: res.status(CONFLICT).send({
						message: `the ${name} country does not exist`,
				  });
		}
		return res.status(OK).send(allCountries);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
};

module.exports = getByQuery;
