const { OK, NOT_FOUND } = require('./protocols');

const getHealth = async (_, res) => {
	try {
		return res.status(OK).send({ message: 'the server is running' });
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
};

module.exports = getHealth;
