'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      password: "TzPikachu",
      address: "Nam Dinh",
      phoneNumber: "0356216333",
      gender: 1,
      firstName: 'Thanh',
      lastName: 'Nguyen',
      email: 'admin@gmail.com',
      roleId: "R1",
      positionId: "positionId",
      image: "image_path",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
