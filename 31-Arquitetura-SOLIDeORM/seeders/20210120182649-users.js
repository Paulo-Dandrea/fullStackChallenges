"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          fullname: "Leonardo",
          email: "leo@test.com",
        },
        {
          fullname: "JEduardo",
          email: "edu@test.com",
        },
        {
          fullname: "JfafaEduardo",
          email: "edu@testafafa.com",
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};