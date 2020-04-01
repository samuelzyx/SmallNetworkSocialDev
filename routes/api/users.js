const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public
ROUTER.get('/', (req, res) => res.send('Users route'));

module.exports = ROUTER;
