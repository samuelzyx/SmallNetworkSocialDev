const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
ROUTER.get('/', (req, res) => res.send('Profile route'));

module.exports = ROUTER;
