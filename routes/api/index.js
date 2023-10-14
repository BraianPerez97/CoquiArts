const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const categoryRoutes = require('./categories-routes.js');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes); // Use the correct path '/category'

module.exports = router;
