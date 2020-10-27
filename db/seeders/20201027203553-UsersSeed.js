'use strict';

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: faker.internet.userName(),
        emailAddress: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        bio: faker.lorem.paragraphs().slice(0, 25),
        avatarUrl: "https: //picsum.photos/200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: faker.internet.userName(),
        emailAddress: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        bio: faker.lorem.paragraphs().slice(0, 25),
        avatarUrl: "https: //picsum.photos/200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: faker.internet.userName(),
        emailAddress: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        bio: faker.lorem.paragraphs().slice(0, 25),
        avatarUrl: "https: //picsum.photos/200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: faker.internet.userName(),
        emailAddress: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        bio: faker.lorem.paragraphs().slice(0, 25),
        avatarUrl: "https: //picsum.photos/200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: faker.internet.userName(),
        emailAddress: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        bio: faker.lorem.paragraphs().slice(0, 25),
        avatarUrl: "https: //picsum.photos/200",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
