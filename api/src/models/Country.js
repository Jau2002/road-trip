const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
	sequelize.define(
		'country',
		{
			id: {
				type: DataTypes.STRING(3),
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				unique: true,
			},
			flag: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			continent: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			capital: {
				type: DataTypes.STRING,
			},
			sub_region: {
				type: DataTypes.STRING,
			},
			area: {
				type: DataTypes.SMALLINT,
			},
			population: {
				type: DataTypes.SMALLINT,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
			underscored: true,
		}
	);
