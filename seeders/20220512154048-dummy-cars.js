'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cars",
      [
        {
          name: "Kijang Innova",
          price: 350000,
          photo: "innova.png",
          size_id: 2,
          created_by: 1
        },
        {
          name: "Avanza",
          price: 450000,
          photo: "avanza.png",
          size_id: 3,
          created_by: 1
        },
        {
          name: "Brio",
          price: 200000,
          photo: "brio.png",
          size_id: 1,
          created_by: 1
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
