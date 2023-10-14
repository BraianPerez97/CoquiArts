const router = require('express').Router();
const { User } = require('../../models');

// GET /user
router.get('/', (req, res) => {
  console.log(req.session);
    //Access our User model and get all
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /user/?
router.get('/:id', (req, res) => {
    //Access model and get user by id
    User.findOne({
        attributes: {exclude: ["passwd"]},
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: "No user found with this id"});
            return;
        }
        res.json(dbUserData);

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /user
router.post('/', (req, res) => {
    // expects kwargs (key/value pair)
    User.create ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        passwd: req.body.passwd
    })
    .then(dbUserData => {
      //saves user session (cookies)
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
// post routes bc carries the req.params in req.body
router.post('/login', (req, res) => {
  //checks is session is true and redirects user to homepage
  //if (req.session.loggedIn) {
    //res.redirect('/');
    //return;
  //}
  //expects email and password
  User.findOne({
    //find user
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({message: "No user found"});
      return;
    }
    //verify user
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({message: "Incorrect email or password"});
      return;
    }
    //cookies
    req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.first_name;
        req.session.loggedIn = true;

      res.json({user: dbUserData, message: "Welcome back!"});
  });
});
});

//POST /user/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    //ADD TO RENDER 404 ART
    res.status(404.).end();
  }
})

// PUT /user/?
router.put('/:id', (req, res) => {
 // expects {name, lastname, email, password}

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