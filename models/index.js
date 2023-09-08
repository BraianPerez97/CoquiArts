const User = require('./User');
const Category = require('./Category');

// Create Associations 
Category.hasMany(User, {
    foreignKey: 'cat_id'
});

User.belongsTo(Category, {
  foreignKey: 'cat_id',
});

module.exports = { User, Category };