'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          tytle: 'Harry Potter',
          author: 'Kevin',
          publisher: 'Kevin',
          year: 2022,
          pages: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tytle: 'Indiana Jones',
          author: 'Julio',
          publisher: 'Julio',
          year: 2023,
          pages: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  },
};
