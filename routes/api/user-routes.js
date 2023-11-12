const router = require('express').Router();
const { User } = require('../../models');

// GET /user
router.get('/', (req, res) => {
  console.log(req.session);
  // Access our User model and get all users
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /user/?
router.get('/:id', (req, res) => {
  // Access model and get user by id
  User.findOne({
    attributes: { exclude: ["passwd"] }, // Exclude password from the response
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
  const cat_id = req.params.cat_id; // Parse the cat_id from request params

  User.findAll({
    where: {
      cat_id: req.params.cat_id // Use the parsed cat_id
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
router.post('/', (req, res) => {
  // Expects JSON data in the request body
  const userData = req.body;

  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    passwd: req.body.passwd,
    cat_id: req.body.cat_id
  })
    .then(dbUserData => {
      // Save user session (cookies)
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.first_name;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /user/login
router.post('/login', async (req, res) => {
  const { email, passwd } = req.body;

  try {
    const user = await User.login(email, passwd);

    // If login is successful, store user information in the session
    req.session.user_id = user.id;
    req.session.username = user.first_name;
    req.session.loggedIn = true;

    res.json({ user, message: "Welcome back!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST /user/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end(); // 404 or any other appropriate status code
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
