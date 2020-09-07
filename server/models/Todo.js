const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  task: Sequelize.STRING,
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Todo;