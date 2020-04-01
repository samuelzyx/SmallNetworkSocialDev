const EXPREESS = require('express');

const APP = EXPREESS();

APP.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

APP.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
