const Sequelize = require("sequelize");

const sequelize = require("../config/db");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
