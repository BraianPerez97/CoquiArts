const router = require('express').Router();
const cors = require('cors');
const { User, Category } = require('../../models');

router.use(cors());

// GET /user
router.get('/', (req, res) => {
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /user/?
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ["passwd"] },
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all users with a specific cat_id
router.get('/by-category/:cat_id', (req, res) => {
  User.findAll({
    where: {
      cat_id: req.params.cat_id
    }
  })
    .then(dbUserData => {
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /user
router.post('/', async (req, res) => {
  const userData = req.body;

  try {
    let category;

    // Check if the provided cat_id exists
    if (userData.cat_id) {
      category = await Category.findByPk(userData.cat_id);
      
      // If the provided cat_id doesn't exist, create a new category
      if (!category) {
        category = await Category.create({
          name: userData.category_name, // Assuming you send the category name in the request body
          description: userData.category_description, // Assuming you send the category description in the request body
        });
      }
    }

    // Create the user with the associated category
    const dbUserData = await User.create({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      passwd: userData.passwd,
      phone_number: userData.phone_number,
      skills: userData.skills,
      description: userData.description,
      social_media: userData.social_media,
      images: userData.images,
      cat_id: category ? category.id : null, // Associate the user with the category
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.first_name;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST /user/login
router.post('/login', async (req, res) => {
  const { email, passwd } = req.body;

  try {
    const user = await User.login(email, passwd);

    req.session.user_id = user.id;
    req.session.username = user.first_name;
    req.session.loggedIn = true;

    res.json({
      user: req.session.user,
      sessionToken: req.session.id,
      message: "Welcome back!"
    });
  } catch (err) {
    console.error("Login error:", err); // Add this line for logging
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST /user/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT /user/?
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /user
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
