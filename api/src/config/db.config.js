const { readdirSync } = require('fs');
const { join, basename } = require('path');
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const sequelize =
	process.env.NODE_ENV === 'production'
		? new Sequelize({
				database: DB_NAME,
				dialect: 'postgres',
				host: DB_HOST,
				port: 5432,
				username: DB_USER,
				password: DB_PASS,
				pool: {
					max: 3,
					min: 1,
					idle: 10000,
				},
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
					keepAlive: true,
				},
				ssl: true,
		  })
		: new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/countries`, {
				logging: false,
				native: false,
		  });

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
};
