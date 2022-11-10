const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../../middlewares/app');
const { Country, conn } = require('../../../config/db.config');

describe('Country routes', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			throw new Error(err);
		})
	);

	beforeEach(() =>
		Country.sync({ force: true }).then(() =>
			Country.create({
				code: 'CRU',
				name: 'Cruzados',
				flag: 'https://www.flagsonline.it/uploads/2017-4-27/1200-0/bandiera-dei-templari-crociata.jpg',
				continent: 'Europe',
			})
		)
	);

	const agent = session(app);

	describe('GET /countries HTTP/1.1', () => {
		it('should get 200 return as JSON object', async () => {
			const { status, body, header } = await agent.get('/countries');
			expect(status).to.equal(200);
			expect(header['content-type']).to.match(/application\/json/);
			expect(body).to.not.be.an('object');
		});
	});
});
