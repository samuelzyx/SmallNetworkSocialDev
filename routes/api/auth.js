const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
ROUTER.get('/', (req, res) => res.send('Auth route'));

module.exports = ROUTER;
