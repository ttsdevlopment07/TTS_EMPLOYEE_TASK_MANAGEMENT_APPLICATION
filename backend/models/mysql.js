// Sequelize MySQL connection setup
const { Sequelize } = require('sequelize');

// Update these values with your MySQL credentials
const sequelize = new Sequelize('employee_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
