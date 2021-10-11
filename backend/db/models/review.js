'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    hostingId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER,
    starRating: DataTypes.DECIMAL,
    reviewText: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Booking, { foreignKey: "bookingId" });
    Review.belongsTo(models.Hosting, { foreignKey: "hostingId" });
    
  };
  return Review;
};