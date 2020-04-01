const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
ROUTER.get('/', (req, res) => res.send('Posts route'));

module.exports = ROUTER;
