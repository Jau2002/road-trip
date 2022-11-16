const { readdirSync } = require('fs');
const { join, basename } = require('path');
const Sequelize = require('sequelize');
const { configure, makeInitialiser } = require('sequelize-pg-utilities');
const config = require('./config.json');

const { name, user, password, options } = configure(config);

const initialise = makeInitialiser(config);

const start = async () => {
	try {
		await initialise(3);
	} catch (err) {
		process.exit(1);
	}
};

const sequelize = new Sequelize(name, user, password, options);

const baseName = basename(__filename);

const modelDefiners = [];

readdirSync(join(__dirname, '../models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== baseName && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(join(__dirname, '../models', file)));
	});

modelDefiners.forEach((model) => model(sequelize));

const entries = Object.entries(sequelize.models);

const capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {
	through: 'country_activity',
	uniqueKey: false,
	foreignKey: 'country_code',
	timestamps: false,
});

Activity.belongsToMany(Country, {
	through: 'country_activity',
	uniqueKey: false,
	foreignKey: 'activity_id',
	timestamps: false,
});

module.exports = {
	...sequelize.models,
	conn: sequelize,
	start,
};
