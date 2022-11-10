const insertion = require('../utils/insertion');
const { OK, NOT_FOUND, BAD_REQUEST } = require('./protocols');

const getByParam = async (req, res) => {
	const allCountries = await insertion();
	const { code } = req.params;
	try {
		const filterByCode = allCountries.filter(
			(c) => c.code.toUpperCase() === code.toUpperCase()
		);
		return filterByCode.length
			? res.status(OK).send(filterByCode)
			: res
					.status(BAD_REQUEST)
					.send({ message: `the country ${code} doesn´t match` });
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
};

module.exports = getByParam;
