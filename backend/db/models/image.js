'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    hostingId: DataTypes.INTEGER,
    pic1: DataTypes.STRING,
    pic2: DataTypes.STRING,
    pic3: DataTypes.STRING,
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Hosting, { foreignKey: 'hostingId' });
  };
  return Image;
};