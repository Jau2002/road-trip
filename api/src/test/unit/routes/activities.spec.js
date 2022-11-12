const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../../middlewares/app');
const { Activity, conn } = require('../../../config/db.config');

describe('Country routes', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			throw new Error(err);
		})
	);

	beforeEach(() =>
		Activity.sync({ force: true }).then(() =>
			Activity.create({
				name: 'fack',
				difficulty: 5,
				going: '2077-01-26',
				leaving: '2087-11-01',
				seasons: ['Summer', 'Autumn'],
				countries: ['Chile', 'Peru'],
			})
		)
	);

	const agent = session(app);

	describe('POST /activities HTTP/1.1', () => {
		it('should return as JSON object', async () => {
			const { body, header } = await agent.post('/activities').send({
				name: 'spit',
				difficulty: 1,
				going: '1490-03-26',
				leaving: '1510-04-28',
				seasons: ['Winter'],
				countries: ['Paraguay'],
			});
			expect(header['content-type']).to.match(/application\/json/);
			expect(body).to.be.an('object');
		});

		it('should when request to send status 200', async () => {
			const { status } = await agent.post('/activities').send({
				name: 'spit',
				difficulty: 1,
				going: '1490-03-26',
				leaving: '1510-04-28',
				seasons: ['Winter'],
				countries: ['Paraguay'],
			});
			expect(status).to.equal(200);
		});

		it('should return as JSON object message "Activity created successfully"', async () => {
			const { body } = await agent.post('/activities').send({
				name: 'spit',
				difficulty: 1,
				going: '1490-03-26',
				leaving: '1510-04-28',
				seasons: ['Winter'],
				countries: ['Paraguay'],
			});
			expect(body).to.deep.equal({ message: 'Activity created successfully' });
		});

		it('should send status 422 if the request had an error', async () => {
			const { status } = await agent.post('/activities').send({});
			expect(status).to.equal(422);
		});

		it('should send error message if there is a validation error', async () => {
			const { body } = await agent.post('/activities').send({
				difficulty: 3,
				going: '1300-24-30',
				leaving: '1302-09-31',
				seasons: ['Spring'],
				countries: ['Bolivia'],
			});
			expect(body).to.deep.equal({
				message: 'notNull Violation: activity.name cannot be null',
			});
		});
	});

	describe('GET /activities HTTP/1.1', () => {
		it('should return as JSON object', async () => {
			const { header, body } = await agent.get('/activities');
			expect(header['content-type']).to.match(/application\/json/);
			expect(body).to.be.not.an('object');
		});

		it('should when request to send status 200', async () => {
			const { status } = await agent.get('/activities');
			expect(status).to.equal(200);
		});

		it('should when doing multiple post return all activities', async () => {
			const { body } = await agent.get('/activities');
			expect(body).to.deep.equal([
				{
					id: 1,
					name: 'fack',
					difficulty: 5,
					leaving: '2087-11-01',
					going: '2077-01-26',
					seasons: ['Summer', 'Autumn'],
				},
			]);
		});
	});
});
