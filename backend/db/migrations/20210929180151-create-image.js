'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostingId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Hostings' }
      },
      pic1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pic2: {
        type: Sequelize.STRING
      },
      pic3: {
        type: Sequelize.STRING
      },
      pic4: {
        type: Sequelize.STRING
      },
      pic5: {
        type: Sequelize.STRING
      },
      pic6: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};