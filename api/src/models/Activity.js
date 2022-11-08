const { STRING, SMALLINT, DATEONLY, ARRAY, ENUM } = require('sequelize');

module.exports = (sequelize) =>
	sequelize.define(
		'activity',
		{
			name: {
				type: STRING,
				unique: true,
			},
			difficulty: {
				type: SMALLINT,
				allowNull: false,
				validate: {
					min: 1,
					max: 5,
				},
			},
			leaving: {
				type: DATEONLY,
				allowNull: false,
			},
			going: {
				type: DATEONLY,
				allowNull: false,
			},
			seasons: {
				type: ARRAY(
					ENUM({
						values: ['Summer', 'Autumn', 'Winter', 'Spring'],
					})
				),
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			underscored: true,
		}
	);
