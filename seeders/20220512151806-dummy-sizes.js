"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          name: "Small",
        },
        {
          name: "Medium",
        },
        {
          name: "Large",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sizes", null, {});
  },
};
