// import Model and DataTypes from Sequelizer and db connection
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// CREATE Category Model
class Category extends Model{}

// create fields/columns for Category model
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
          unique: true,
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
    // Predefined categories
const predefinedCategories = [
  { name: 'Graphic Design & Illustration', description: 'Visual arts and design' },
  { name: 'Photography', description: 'Capturing moments through the lens' },
  { name: 'Music & Jingles', description: 'Musical compositions and jingles' },
  { name: 'Baked Goods', description: 'Delicious baked treats' },
  { name: 'Muralist & Street Art', description: 'Street art and mural creation' },
  { name: 'Social Media Content & Strategy', description: 'Content creation and social media strategy' },
  { name: 'Event Services', description: 'Services for events and gatherings' },
  { name: 'Other', description: 'Other creative services' },
];

// Function to seed predefined categories
const seedCategories = async () => {
  for (const category of predefinedCategories) {
    await Category.create(category);
  }
};

module.exports = { Category, seedCategories };

module.exports = Category;