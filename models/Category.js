// import Model and DataTypes from Sequelizer and db connection
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// CREATE Category Model
class Category extends Model{}

// create fields/columns for Post model
Category.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      }
    );


  module.exports = Category;