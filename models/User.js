// import Model and DataTypes from Sequelizer and db connection
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// CREATE User Model
class User extends Model{}

// Define table columns and configuration
User.init(
    {
        //Table definitions
        //define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //define user name columns
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING
        },
        //define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //define passwd column
        passwd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //passwd must be at leat 8 chars
                len: [8]
            }
        }
    },
    {
        // Table Config
        //pass imported sequelize connection
        sequelize,

        //create auto timestamp
        timestamps: false,
        freezeTableName: true,

        //use underscore instead of camel-casing in db
        underscored: true,

        //make it so our model stays lowercase in db
        modelName: 'user'
    }
);

module.exports = User;