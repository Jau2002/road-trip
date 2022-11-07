const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
	sequelize.define(
		'activity',
		{
			name: {
				type: DataTypes.STRING,
				unique: true,
			},
			difficulty: {
				type: DataTypes.SMALLINT,
				allowNull: false,
				validate: {
					min: 1,
					max: 5,
				},
			},
			leaving: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			going: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			seasons: {
				type: DataTypes.ARRAY(
					DataTypes.ENUM({
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
