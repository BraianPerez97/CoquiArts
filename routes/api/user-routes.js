const router = require('express').Router();
const { User } = require('../../models');

// GET /user
router.get('/', (req, res) => {
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
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// PUT /user/?
router.put('/:id', (req, res) => {

});

// DELETE /user
router.delete('/', (req, res) => {

});


module.exports = router;