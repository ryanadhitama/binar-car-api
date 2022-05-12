"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.ENUM("SUPERADMIN", "ADMIN", "MEMBER"),
      },
      phone: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      deleted_by: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
