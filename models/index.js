const User = require('./User');
const Category = require('./Category');

// Create Associations 
// A Category has many User (one-to-many relationship)
Category.hasMany(User, {
    foreignKey: 'cat_id',
});

// A User belongs to a Category (inverse of the one-to-many relationship)
User.belongsTo(Category, {
  foreignKey: 'cat_id',
});

// Export the models
module.exports = { User, Category };