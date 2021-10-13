'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
            tableName: 'Hosting'
          },
      }
    },

    hostingId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {model:{
        tableName:'Users'
      }}
    }
  })
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    Favorite.belongsTo(models.Hosting, { foreignKey: 'hostingId' });
  };
  return Favorite;
};