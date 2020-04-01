const EXPREESS = require('express');
const CONNECTDB = require('./config/db');
const APP = EXPREESS();

// Connect DB
CONNECTDB();

APP.get('/', (req, res) => res.send('API Running'));

// Define Routes
APP.use('/api/users', require('./routes/api/users'));
APP.use('/api/auth', require('./routes/api/auth'));
APP.use('/api/profile', require('./routes/api/profile'));
APP.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

APP.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
