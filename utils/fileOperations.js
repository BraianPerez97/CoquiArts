const fs = require('fs');
const path = require('path');

function createUserDirectory(userId) {
    const baseDirectory = '/path/to/json_directory/'; // Update this with the path to your directory
    const userDirectory = path.join(baseDirectory, `user_${userId}`);

    if (!fs.existsSync(userDirectory)) {
        fs.mkdirSync(userDirectory, { recursive: true });
    }
}

function deleteUserDirectory(userId) {
    const directoryPath = path.join('/path/to/json_directory/', `user_${userId}`);
    
    if (fs.existsSync(directoryPath)) {
        fs.rmdirSync(directoryPath, { recursive: true });
    }
}

function writeUserDataToJSON(userId, userData) {
    const jsonFileName = `user_profile_${userId}.json`;
    const jsonFilePath = path.join('/path/to/json_directory/', `user_${userId}`, jsonFileName);

    fs.writeFileSync(jsonFilePath, JSON.stringify(userData));
}

function readUserDataFromJSON(userId) {
    const jsonFileName = `user_profile_${userId}.json`;
    const jsonFilePath = path.join('/path/to/json_directory/', `user_${userId}`, jsonFileName);

    if (fs.existsSync(jsonFilePath)) {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
    }

    return null;
}

function updateUserDataInJSON(userId, updatedData) {
    const existingData = readUserDataFromJSON(userId);
    if (existingData) {
        const updatedProfile = { ...existingData, ...updatedData };
        writeUserDataToJSON(userId, updatedProfile);
    }
}

function deleteUserJSONFile(userId) {
    const jsonFileName = `user_profile_${userId}.json`;
    const jsonFilePath = path.join('/path/to/json_directory/', `user_${userId}`, jsonFileName);

    if (fs.existsSync(jsonFilePath)) {
        fs.unlinkSync(jsonFilePath);
    }
}

function checkDirectoryExistence(directoryPath) {
    return fs.existsSync(directoryPath);
}

function checkFileExistence(filePath) {
    return fs.existsSync(filePath);
}

module.exports = {
    createUserDirectory,
    deleteUserDirectory,
    writeUserDataToJSON,
    readUserDataFromJSON,
    updateUserDataInJSON,
    deleteUserJSONFile,
    checkDirectoryExistence,
    checkFileExistence
    // Other utility functions as needed
};
