const { expect } = require('chai');
const { conn, Country } = require('../../../config/db.config');

describe('Country model', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			throw new Error(err);
		})
	);
	let model;

	beforeEach(async () => {
		model = await Country.create({ name: 'spain' });
	});

	describe('validate attributes', async () => {
		beforeEach(() => Country.sync({ force: true }));

		it('should not have a null dataTypes', () => {
			expect(model.toJSON())
				.to.have.ownPropertyDescriptor('name')
				.to.not.be.a('null');
		});
	});
});
