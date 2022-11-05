const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
	sequelize.define(
		'country',
		{ name: { type: DataTypes.STRING, allowNull: false } },
		{ timestamps: false, freezeTableName: true, underscored: true }
	);
