const MONGOOSE = require('mongoose');
const CONFIG = require('config');
const DB = CONFIG.get('mongoURL');

const CONNECTDB = async () => {
  try {
    await MONGOOSE.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connection MongoDB ' + err);
    //Exist process with failure
    process.exist(1);
  }
};

module.exports = CONNECTDB;
