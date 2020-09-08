const Sequelize = require("sequelize");
require("dotenv").config({ path: "./.env" });

const sequelize = new Sequelize(
  "ensolvers",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    port: 3306,
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
