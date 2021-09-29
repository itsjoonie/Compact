'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    hostingId: DataTypes.INTEGER,
    pic1: DataTypes.STRING,
    pic2: DataTypes.STRING,
    pic3: DataTypes.STRING,
    pic4: DataTypes.STRING,
    pic5: DataTypes.STRING,
    pic6: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};