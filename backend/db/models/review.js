'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:{
          tableName: 'User'
        },
      }
    },
    hostingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:{
          table:'Hosting'
        }
      }
    },
    starRating: DataTypes.DECIMAL,
    reviewText: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Hosting, { foreignKey: "hostingId" });
    
  };
  return Review;
};