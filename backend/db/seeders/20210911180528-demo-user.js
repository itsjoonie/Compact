'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'DemoLastName',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'karen@user.io',
        firstName: 'Karen',
        lastName: 'Smith',
        username: 'Catluver',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'bob@user.io',
        firstName: 'Bob',
        lastName: 'Green',
        username: 'Dogluver',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'phil@user.io',
        firstName: 'Phil',
        lastName: 'Green',
        username: 'PhilGreen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'morgan@user.io',
        firstName: 'Morgan',
        lastName: 'Freeman',
        username: 'Morgan123',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        firstName: 'Fake',
        lastName: 'FakeLastName',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        firstName: 'Fake',
        lastName: 'FakeLastName',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};