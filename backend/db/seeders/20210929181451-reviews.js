'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 2,
          hostingId: 1,
          bookingId: 1,
          starRating: 5,
          reviewText: "Amazing host and beautiful home. Very cozy and has every aspect I was looking for to stay"
        },
        {
          userId: 3,
          hostingId: 2,
          bookingId: 2,
          starRating: 4,
          reviewText: "Just what I needed! Very comfortable and spacious even though it is a tiny home!"
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
