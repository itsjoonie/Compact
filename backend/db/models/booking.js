'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    hostingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    guest: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Hosting, { foreignKey: 'hostingId' });
    Booking.hasOne(models.Review, { foreignKey: "hostingId", onDelete: 'CASCADE', hooks: true });
  };
  return Booking;
};