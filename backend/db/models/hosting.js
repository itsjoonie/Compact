'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hosting = sequelize.define('Hosting', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    guest: DataTypes.INTEGER,
    pet: DataTypes.BOOLEAN,
    bed: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Hosting.associate = function(models) {
    // associations can be defined here
    Hosting.belongsTo(models.User, { foreignKey: 'userId' });
    Hosting.hasMany(models.Image, { foreignKey: 'hostingId', onDelete: 'CASCADE', hooks: true});
    Hosting.hasMany(models.Booking, { foreignKey: 'hostingId', onDelete:'CASCADE', hooks: true});
    Hosting.hasMany(models.Review, { foreignKey: 'hostingId', onDelete:'CASCADE', hooks: true});
    Hosting.hasMany(models.Favorite, { foreignKey: 'hostingId', onDelete:'CASCADE', hooks: true});
  };
  return Hosting;
};