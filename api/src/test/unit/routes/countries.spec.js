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
		it('should return as JSON object', async () => {
			const { body, header } = await agent.get('/countries');
			expect(header['content-type']).to.match(/application\/json/);
			expect(body).to.not.be.an('object');
		});

		it('should when request to send status 200', async () => {
			const { status } = await agent.get('/countries');
			expect(status).to.equal(200);
		});

		it('should when request called by QUERY send a status 200', async () => {
			const { status } = await agent
				.get('/countries')
				.query({ name: 'Colombia' });
			expect(status).to.equal(200);
		});

		it('should return the data when pass a country by QUERY', async () => {
			const { body } = await agent
				.get('/countries')
				.query({ name: 'Colombia' });
			expect(body).to.deep.equal([
				{
					code: 'COL',
					name: 'Colombia',
					flag: 'https://flagcdn.com/co.svg',
					continent: 'South America',
					capital: 'Bogotá',
					subregion: 'South America',
					area: 1141748,
					population: 50882884,
				},
			]);
		});

		it('should send status 409 the QUERY does not match any country', async () => {
			const { status } = await agent
				.get('/countries')
				.query({ name: 'Polombia' });
			expect(status).to.equal(409);
		});

		it('should send error message the QUERY does not match any country', async () => {
			const { body } = await agent
				.get('/countries')
				.query({ name: 'Polombia' });
			expect(body).to.deep.equal({
				message: 'the Polombia country doesn´t exist',
			});
		});

		it('should when request passing PARAM by parameter send a status 200', async () => {
			const code = 'AFG';
			const { status } = await agent.get(`/countries/${code}`);
			expect(status).to.equal(200);
		});

		it('should return the data when pass a code by PARAM', async () => {
			const code = 'AFG';
			const { body } = await agent.get(`/countries/${code}`);
			expect(body).to.deep.equal([
				{
					code: 'AFG',
					name: 'Afghanistan',
					flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
					continent: 'Asia',
					capital: 'Kabul',
					subregion: 'Southern Asia',
					area: 652230,
					population: 40218234,
				},
			]);
		});

		it('should send status 409 the PARAM does not match any code', async () => {
			const code = 'USD';
			const { status } = await agent.get(`/countries/${code}`);
			expect(status).to.equal(400);
		});

		it('should send error message the QUERY does not match any country', async () => {
			const code = 'USD';
			const { body } = await agent.get(`/countries/${code}`);
			expect(body).to.deep.equal({ message: 'the country USD doesn´t match' });
		});
	});
});
