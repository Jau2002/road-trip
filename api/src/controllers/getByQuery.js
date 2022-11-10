const insertion = require('../utils/insertion');
const { OK, NOT_FOUND } = require('./protocols');

const getByQuery = async (req, res) => {
	const allCountries = await insertion();
	try {
		return res.status(OK).send(allCountries);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
};

module.exports = getByQuery;
