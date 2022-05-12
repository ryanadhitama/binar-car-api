"use strict";

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = (user) => {
      return {
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      };
    };

    const user = [
      {
        name: "Superadmin",
        email: "superadmin@binaracademy.com",
        password: "rahasia123",
        role: "SUPERADMIN",
        phone: "08178967876",
        address: "Denpasar",
      },
      {
        name: "Admin",
        email: "admin@binaracademy.com",
        password: "rahasia123",
        role: "ADMIN",
        phone: "08178967876",
        address: "Malang",
      },
      {
        name: "Member",
        email: "member@binaracademy.com",
        password: "rahasia123",
        role: "MEMBER",
        phone: "0834567876",
        address: "Sidoarjo",
      },
    ];

    await queryInterface.bulkInsert("users", user.map(hashPassword), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
