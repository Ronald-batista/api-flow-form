'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.add("answers", "phone", {
      type: Sequelize.STRING(25),
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("answers", "phone");
  }
};
