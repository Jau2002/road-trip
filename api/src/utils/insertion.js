const attachinDb = require('../services/attachInDb');
const requestApi = require('../services/requestApi');

const insertion = async () => {
	const request = Promise.allSettled([requestApi(), attachinDb()]);

	const [{ value: getDataApi }, { value: getTablesDb }] = await request;

	return [...getDataApi, ...getTablesDb];
};

module.exports = insertion;
