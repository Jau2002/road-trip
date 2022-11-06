const { expect } = require('chai');
const { conn, Activity } = require('../../../config/db.config');

describe('Activity model', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			throw new Error(err);
		})
	);

	describe('validate attributes', async () => {
		let model;

		beforeEach(async () => {
			model = await Activity.create({
				name: 'sex',
				difficulty: 1,
				leaving: '2077-12-24',
				going: '2077-12-25',
				seasons: ['Summer', 'Autumn'],
			});
		});

		afterEach(() => Activity.sync({ force: true }));

		it('should not have a "null" ID, NAME, DIFFICULTY, LEAVING, GOING and SEASONS', () => {
			expect(model.toJSON()).to.have.ownProperty('id').to.not.be.a('null');

			expect(model.toJSON()).to.have.ownProperty('name').to.not.be.a('null');

			expect(model.toJSON())
				.to.have.ownProperty('difficulty')
				.to.not.be.a('null');

			expect(model.toJSON()).to.have.ownProperty('leaving').to.not.be.a('null');

			expect(model.toJSON()).to.have.ownProperty('going').to.not.be.a('null');

			expect(model.toJSON()).to.have.ownProperty('seasons').to.not.be.a('null');
		});

		it('should be of type "number" ID and DIFFICULTY', () => {
			expect(model.toJSON()).to.have.ownProperty('id').to.be.a('number');

			expect(model.toJSON())
				.to.have.ownProperty('difficulty')
				.to.be.a('number');
		});

		it('should the DIFFICULTY have a range between 1 to 5', () => {
			expect(model.toJSON())
				.to.have.ownProperty('difficulty')
				.to.be.within(1, 5);
		});

		it('should be of type "string" NAME, LEAVING and GOING', () => {
			expect(model.toJSON()).to.have.ownProperty('name').to.be.a('string');

			expect(model.toJSON()).to.have.ownProperty('leaving').to.be.a('string');

			expect(model.toJSON()).to.have.ownProperty('going').to.be.a('string');
		});

		it('should the LEAVING and GOING url be valid format', () => {
			expect(model.toJSON())
				.to.have.ownProperty('leaving')
				.to.match(/^\d{4}-\d{2}-\d{2}$/);

			expect(model.toJSON())
				.to.have.ownProperty('going')
				.to.match(/^\d{4}-\d{2}-\d{2}$/);
		});

		it('should be of type "array" SEASONS inside type "string"', () => {
			expect(model.toJSON()).to.have.ownProperty('seasons').to.be.an('array');
		});

		it('should includes the SEASONS of the year', () => {
			expect(model.toJSON())
				.to.have.ownProperty('seasons')
				.to.contain.oneOf(['Summer', 'Autumn', 'Winter', 'Spring']);
		});
	});
});
