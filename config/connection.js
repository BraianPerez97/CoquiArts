// Import Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection with the database using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
