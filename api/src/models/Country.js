const { STRING, TEXT, SMALLINT } = require('sequelize');

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
				type: SMALLINT,
			},
			population: {
				type: SMALLINT,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			underscored: true,
		}
	);
