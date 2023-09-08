// Import Sequelize constructor
const Sequelize = require('sequelize');


require('dotenv').config();

// Create conection with database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
{
    host: 'localhost',
    dialect: 'mysql',
    port: 5001
});

module.exports = sequelize;