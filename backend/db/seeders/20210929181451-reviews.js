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
          starRating: 4,
          reviewText: "Amazing host and beautiful home. Very cozy and has every aspect I was looking for to stay"
        },
        {
          userId: 5,
          hostingId: 1,
          starRating: 5,
          reviewText: "Although I have to cancel my reservation! I want to give props to the Host for replying quickly and make cancellation simple and seamlessly! "
        },

        {
          userId: 3,
          hostingId: 1,
          starRating: 5,
          reviewText: "Super helpful host! Also, gives us free cookies and tea! Truly the best tiny house experience. I wish I cant stay here forever."
        },
        {
          userId: 4,
          hostingId: 1,
          starRating: 5,
          reviewText: "I had an amazing with this whole tiny home experience! I am now looking forward to downsizing! Great place and very sweet host! Replies fast and easy to talk to!"
        },
        {
          userId: 3,
          hostingId: 2,
          starRating: 4,
          reviewText: "Just what I needed! Very comfortable and spacious even though it is a tiny home!"
        },
        {
          userId: 4,
          hostingId: 2,
          starRating: 4,
          reviewText: "The host is super nice. Very wonderful place to stay. "
        },
        {
          userId: 5,
          hostingId: 2,
          starRating: 5,
          reviewText: "Great, just what I needed! Fast replying host and very clean! No extra charge.Very cozy and has every aspect I was looking for to stay"
        },
        {
          userId: 4,
          hostingId: 3,
          starRating: 4,
          reviewText: "GREAT EXPERIENCE! Recommend to stay here if you want a cozy tiny home experience!!!"
        },
        {
          userId: 4,
          hostingId: 3,
          starRating: 5,
          reviewText: "I love it here! The house is perfect and clean! It doesn't feel like a tiny house but it is truly is! "
        },
        {
          userId: 5,
          hostingId: 3,
          starRating: 2,
          reviewText: "I don't know bout you but, the host didn't respond quickly to our questions. Waited an hour to get the key. "
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
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
