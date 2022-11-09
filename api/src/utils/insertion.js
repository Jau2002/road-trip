const attachinDb = require('../services/attachInDb');
const requestApi = require('../services/requestApi');

const insertion = [attachinDb, requestApi];

Promise.allSettled(insertion)
	.then((data) => data.values)
	.catch((err) => {
		throw new Error(err);
	});

module.exports = insertion;
