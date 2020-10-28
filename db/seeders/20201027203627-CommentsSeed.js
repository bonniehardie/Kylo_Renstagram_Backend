'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: faker.lorem.paragraphs().slice(0, 25),
        userId: Math.ceil(Math.random() * 5),
        photoId: Math.ceil(Math.random() * 20),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
