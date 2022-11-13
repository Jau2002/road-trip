const { STRING, TEXT, FLOAT } = require('sequelize');

module.exports = (sequelize) =>
	sequelize.define(
		'country',
		{
			code: {
				type: STRING(3),
				primaryKey: true,
			},
			name: {
				type: STRING,
				unique: true,
			},
			flag: {
				type: TEXT,
				allowNull: false,
			},
			continent: {
				type: STRING,
				allowNull: false,
			},
			capital: {
				type: STRING,
			},
			subregion: {
				type: STRING,
			},
			area: {
				type: FLOAT,
			},
			population: {
				type: FLOAT,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			underscored: true,
		}
	);
