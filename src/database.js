const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

module.exports = sequelize;

// async function test_connection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Conectado a DB!");
//   } catch (error) {
//     console.error("No se conecto", error);
//   }
// }
// test_connection();
