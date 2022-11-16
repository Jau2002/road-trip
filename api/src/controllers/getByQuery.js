const { Op } = require('sequelize');
const { Country, Activity } = require('../config/db.config');
const { OK, NOT_FOUND, CONFLICT } = require('./protocols');
const insertion = require('../services/insertion');

const getByQuery = async (req, res) => {
	const { name } = req.query;
	const allCountries = await insertion();
	try {
		if (name) {
			const countriesName = await Country.findAll({
				where: { name: { [Op.iLike]: `%${name}%` } },
				include: Activity,
			});
			return countriesName.length
				? res.status(OK).send(countriesName)
				: res
						.status(CONFLICT)
						.send({ message: `the ${name} country doesn´t exist` });
		}
		return res.status(OK).send(allCountries);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
};

module.exports = getByQuery;
