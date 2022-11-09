const { expect } = require('chai');
const { conn, Country } = require('../../../config/db.config');

describe('Country model', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			throw new Error(err);
		})
	);

	describe('validate attributes', async () => {
		let model;

		beforeEach(async () => {
			model = await Country.create({
				code: 'zzz',
				name: 'Nazi',
				flag: 'https://www.lavanguardia.com/files/image_449_220/uploads/2021/08/17/611b908d60e7b.jpeg',
				continent: 'Europe',
			});
		});

		afterEach(() => Country.sync({ force: true }));

		it('should not have a "null" CODE, NAME, FLAG and CONTINENT', () => {
			expect(model.toJSON()).to.have.ownProperty('code').to.not.be.a('null');

			expect(model.toJSON()).to.have.ownProperty('name').to.not.be.a('null');

			expect(model.toJSON()).to.have.ownProperty('flag').to.not.be.a('null');

			expect(model.toJSON())
				.to.have.ownProperty('continent')
				.to.not.be.a('null');
		});

		it('should the NAME have length 3', () => {
			expect(model.toJSON()).to.have.ownProperty('code').to.have.lengthOf(3);
		});

		it('should the FLAG url be valid format', () => {
			expect(model.toJSON())
				.to.have.ownProperty('flag')
				.to.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jp?eg|gif|png)/g);
		});

		it('should be of type "string" CODE, NAME, FLAG and CONTINENT', () => {
			expect(model.toJSON()).to.have.ownProperty('code').to.be.a('string');

			expect(model.toJSON()).to.have.ownProperty('name').to.be.a('string');

			expect(model.toJSON()).to.have.ownProperty('flag').to.be.a('string');

			expect(model.toJSON()).to.have.ownProperty('continent').to.be.a('string');
		});

		it('should be of type "string" or "null" CAPITAL and SUBREGION', () => {
			expect(model.toJSON())
				.to.have.ownProperty('capital')
				.to.be.oneOf(['string', null]);

			expect(model.toJSON())
				.to.have.ownProperty('subregion')
				.to.be.oneOf(['string', null]);
		});

		it('should be of type "number" or "null" AREA and POPULATION', () => {
			expect(model.toJSON())
				.to.have.ownProperty('area')
				.to.be.oneOf(['number', null]);

			expect(model.toJSON())
				.to.have.ownProperty('population')
				.to.be.oneOf(['number', null]);
		});
	});
});
