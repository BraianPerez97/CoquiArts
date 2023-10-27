// import Model and DataTypes from Sequelizer and db connection
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const fs = require('fs');

// CREATE User Model
class User extends Model {
    static async createUserAndSaveToFile(userData) {
        // Hash the password
        userData.passwd = await bcrypt.hash(userData.passwd, 10);

            // Check if the email already exists
        const existingUser = await User.findOne({
            where: { email: userData.email },
        });
    
        if (existingUser) {
            // Email already exists, handle accordingly
            // For example, you can throw an error or return a custom response
            throw new Error('Email address is already in use');
        }

        // Create JSON file from user data
        const jsonFileName = `user_${Date.now()}.json`;
        fs.writeFileSync(jsonFileName, JSON.stringify(userData));

        // Store the relative path in the database
        const user = await this.create({
            ...userData,
            json_path: jsonFileName // Make a column 'json_path' in our table

        });
        return user;
    }

    // Create a method for user login
    static async login(email, passwd) {
        const user = await this.findOne({ where: { email }});

        if (!user) {
            throw new Error('No user found with this email address.');
        }

        const validPassword = await bcrypt.compare(passwd, user.passwd);
        
        if (!validPassword) {
            throw new Error('Incorrect password.');
            }

            return user;
        }
    }


// Initialize the User model with table olumns and configurations
User.init(
    {
        // Table definitions
        // Define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // Define user name columns
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING
        },
        // Define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // Define password column
        passwd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Passwd must be at leat 8 chars
                len: [8]
            },
        },
        // Define json_path column for storing the relative path of the JSON file
            json_path: {
                type: DataTypes.STRING,
                allowNull: true,
        },
    },
    {
        // Set up hooks (lyfecycle functionality)
        hooks: {
            // Before creating a new user, hash the password
        async beforeCreate(dbUserData) {
        dbUserData.passwd = await bcrypt.hash(dbUserData.passwd, 10);
            return dbUserData;
        },
        // Before updating a user, hash the updated password
        async beforeUpdate(updateUserData) {
            updateUserData.passwd = await bcrypt.hash(updateUserData.passwd, 10);
            return updateUserData;
        }
    },
        
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