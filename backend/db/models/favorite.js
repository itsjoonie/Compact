'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    hostingId: DataTypes.INTEGER,
    heart: DataTypes.BOOLEAN
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    Favorite.belongsTo(models.Hosting, { foreignKey: 'hostingId' });
  };
  return Favorite;
};