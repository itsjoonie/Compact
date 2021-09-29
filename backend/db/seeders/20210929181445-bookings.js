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
      return queryInterface.bulkInsert('Bookings', [
        {
          hostingId: 1,
          userId: 2,
          guest:2,
          startDate: "11/10/2021",
          endDate: "11/15/2021"
        },
        {
          hostingId: 2,
          userId: 3,
          guest:2,
          startDate: "11/10/2021",
          endDate: "11/15/2021"
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
