const express = require('express');
const router = express.Router();
const User = require('../models/user');
const fs = require('fs');
const cors = require('cors');

router.use(cors()); 

router.post('/update-profile', async (req, res) => {
try {
    const userId = req.body.userId; // Adjust the way you get the user ID from the request

    // Fetch user data from the database
    const user = await User.findByPk(userId);

    if (!user) {
    return res.status(404).json({ error: 'User not found' });
    }

    // Update user data with new profile information
    user.user_color = req.body.user_color;
    user.user_photo = req.body.user_photo;
    user.phone_number = req.body.phone_number;
    user.skills = req.body.skills;
    user.about = req.body.about;
    user.work_imgs = req.body.work_imgs;
    user.socials = req.body.socials;

    // Save the user with updated profile data
    await user.save();

    // Create a JSON file with user profile data
    const profileData = {
      user_color: user.user_color,
      user_photo: user.user_photo,
      phone_number: user.phone_number,
      skills: user.skills,
      about: user.about,
      work_imgs: user.work_imgs,
      socials: user.socials,
    };

    const jsonFileName = `user_profile_${userId}.json`;
    fs.writeFileSync(jsonFileName, JSON.stringify(profileData));

    // Update the profile_data column in the database
    user.profile_data = jsonFileName;
    await user.save();

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
